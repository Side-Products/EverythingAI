import AiRecommender from "../models/aiRecommender";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";

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
  console.log("recommendation:", recommendation);
  if (!recommendation) {
    return next(new ErrorHandler("No recommendation found with this id", 404));
  }
  const recommendationId = recommendation._id;

  //   const tools = await CollectionToolRelation.aggregate([
  //     { $match: { collectionId: collectionId } },
  //     {
  //       $lookup: {
  //         from: "tools",
  //         localField: "toolId",
  //         foreignField: "_id",
  //         as: "tools",
  //       },
  //     },
  //     {
  //       $unwind: "$tools",
  //     },
  //     {
  //       $replaceRoot: { newRoot: "$tools" },
  //     },
  //     {
  //       $lookup: {
  //         from: "likedtools",
  //         localField: "_id",
  //         foreignField: "tool",
  //         as: "likes",
  //       },
  //     },
  //     {
  //       $addFields: {
  //         likeCount: { $size: "$likes" },
  //       },
  //     },
  //     {
  //       $sort: { likeCount: -1, createdAt: -1 },
  //     },
  //     {
  //       $lookup: {
  //         from: "categories",
  //         localField: "category",
  //         foreignField: "_id",
  //         as: "category",
  //       },
  //     },
  //     {
  //       $lookup: {
  //         from: "subcategories",
  //         localField: "subCategory",
  //         foreignField: "_id",
  //         as: "subCategory",
  //       },
  //     },
  //     {
  //       $lookup: {
  //         from: "pricings",
  //         localField: "pricing",
  //         foreignField: "_id",
  //         as: "pricing",
  //       },
  //     },
  //     {
  //       $project: {
  //         name: 1,
  //         slug: 1,
  //         url: 1,
  //         utmLink: 1,
  //         image: 1,
  //         oneLiner: 1,
  //         category: { $arrayElemAt: ["$category", 0] },
  //         subCategory: { $arrayElemAt: ["$subCategory", 0] },
  //         pricing: { $arrayElemAt: ["$pricing", 0] },
  //         createdAt: 1,
  //         likeCount: 1,
  //         ad: 1,
  //       },
  //     },
  //   ]);

  //   const toolsWithLike = await maybeAddLikedTools(req, tools);

  res.status(200).json({
    success: true,
    recommendation: {
      ...recommendation._doc,
      // tools: toolsWithLike
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
