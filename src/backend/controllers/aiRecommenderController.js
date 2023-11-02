import AiRecommender from "../models/aiRecommender";
import Tool from "../models/tool";
import Category from "@/backend/models/category";
import SubCategory from "@/backend/models/subCategory";
import Pricing from "@/backend/models/pricing";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";
import { maybeAddLikedTools } from "./toolsController";

// add to db => /api/ai-recommendations
const createAiRecommendation = catchAsyncErrors(async (req, res) => {
  const {
    whatAreYouHereFor,
    workFor,
    category,
    subCategory,
    helpsMeWith,
    whatsImportant,
    companySize,
  } = req.body;
  const recommendation = await AiRecommender.create({
    user: req.user._id || req.user.id,
    whatAreYouHereFor,
    workFor,
    category,
    subCategory,
    helpsMeWith,
    whatsImportant,
    companySize,
  });

  res.status(200).json({
    success: true,
    recommendation,
  });
});

// get recommendation => /api/ai-recommendations/:id
const getAiRecommendation = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.query;
  const recommendation = await AiRecommender.findById(id);
  if (!recommendation) {
    return next(new ErrorHandler("No recommendation found with this id", 404));
  }

  const category = await Category.findOne({ name: recommendation.category });
  const subCategory = await SubCategory.findOne({
    name: recommendation.subCategory,
    categoryId: category._id,
  });

  const tools = await Tool.aggregate([
    {
      $match: {
        verified: true,
        category: category._id,
        subCategory: subCategory._id,
      },
    },
    {
      $lookup: {
        from: "likedtools",
        localField: "_id",
        foreignField: "tool",
        as: "likes",
      },
    },
    {
      $addFields: {
        likeCount: { $size: "$likes" },
      },
    },
    {
      $addFields: {
        reviewsArray: {
          $cond: {
            if: {
              $or: [
                { $eq: ["$reviews", null] }, // Check if "reviews" is null
                { $eq: ["$reviews", false] }, // Check if "reviews" is false
              ],
            },
            then: [], // Replace with an empty array
            else: { $objectToArray: "$reviews" }, // Convert to array if not null
          },
        },
      },
    },
    {
      $addFields: {
        reviewCount: { $size: { $ifNull: ["$reviewsArray", []] } }, // Calculate the length of the "reviews" array
      },
    },
    {
      $sort: {
        ad: -1,
        featured: -1,
        reviewCount: -1,
        // likeCount: -1,
        // timesVisited: -1,
        // createdAt: -1,
      },
    },
    {
      $limit: 3,
    },
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "_id",
        as: "category",
      },
    },
    {
      $lookup: {
        from: "subcategories",
        localField: "subCategory",
        foreignField: "_id",
        as: "subCategory",
      },
    },
    {
      $lookup: {
        from: "pricings",
        localField: "pricing",
        foreignField: "_id",
        as: "pricing",
      },
    },
    {
      $project: {
        name: 1,
        slug: 1,
        url: 1,
        utmLink: 1,
        image: 1,
        oneLiner: 1,
        youtubeDemoVideoLink: 1,
        features: 1,
        useCases: 1,
        twitter: 1,
        instagram: 1,
        linkedin: 1,
        youtube: 1,
        verified: 1,
        category: { $arrayElemAt: ["$category", 0] },
        subCategory: { $arrayElemAt: ["$subCategory", 0] },
        pricing: { $arrayElemAt: ["$pricing", 0] },
        createdAt: 1,
        likeCount: 1,
        ad: 1,
        timesVisited: 1,
        reviews: 1,
      },
    },
  ]);

  const toolsWithLike = await maybeAddLikedTools(req, tools);

  const toolIdsToExclude = tools.map((tool) => tool._id); // Extract _id values from tools
  const similarTools = await Tool.aggregate([
    {
      $match: {
        category: category._id,
        verified: true,
        _id: { $nin: toolIdsToExclude }, // Exclude the tool IDs
      },
    },
    {
      $lookup: {
        from: "likedtools",
        localField: "_id",
        foreignField: "tool",
        as: "likes",
      },
    },
    {
      $addFields: {
        likeCount: { $size: "$likes" },
      },
    },
    {
      $sort: { ad: -1, likeCount: -1, timesVisited: -1, createdAt: -1 },
    },
    {
      $limit: 10,
    },
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "_id",
        as: "category",
      },
    },
    {
      $lookup: {
        from: "subcategories",
        localField: "subCategory",
        foreignField: "_id",
        as: "subCategory",
      },
    },
    {
      $lookup: {
        from: "pricings",
        localField: "pricing",
        foreignField: "_id",
        as: "pricing",
      },
    },
    {
      $project: {
        name: 1,
        slug: 1,
        url: 1,
        utmLink: 1,
        image: 1,
        oneLiner: 1,
        category: { $arrayElemAt: ["$category", 0] },
        subCategory: { $arrayElemAt: ["$subCategory", 0] },
        pricing: { $arrayElemAt: ["$pricing", 0] },
        createdAt: 1,
        likeCount: 1,
        ad: 1,
      },
    },
  ]);
  const similarToolsWithLikes = await maybeAddLikedTools(req, similarTools);

  res.status(200).json({
    success: true,
    recommendation: {
      ...recommendation._doc,
      tools: toolsWithLike,
      similarTools: similarToolsWithLikes,
    },
  });
});

// get all recommendations => /api/ai-recommendations
const allAiRecommendations = catchAsyncErrors(async (req, res) => {
  const recommendations = await AiRecommender.find()
    .sort({
      createdAt: "desc",
    })
    .populate({
      path: "user",
    });
  const recommendationsCount = await AiRecommender.countDocuments();

  res.status(200).json({
    success: true,
    recommendations,
    recommendationsCount,
  });
});

// delete recommendation => /api/ai-recommendations/:id
const deleteAiRecommendation = catchAsyncErrors(async (req, res, next) => {
  const recommendation = await AiRecommender.findById(req.query.id);
  if (!recommendation) {
    return next(new ErrorHandler("No recommendation with this ID", 404));
  }

  await recommendation.remove();
  res.status(200).json({ success: true, message: "Deleted successfully" });
});

export {
  createAiRecommendation,
  getAiRecommendation,
  allAiRecommendations,
  deleteAiRecommendation,
};
