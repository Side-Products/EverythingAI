import mongoose from "mongoose";
import Tool from "@/backend/models/tool";
import Category from "@/backend/models/category";
import SubCategory from "@/backend/models/subCategory";
import Pricing from "@/backend/models/pricing";
import LikedTool from "@/backend/models/likedTool";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";
import APIFeatures from "@/backend/utils/apiFeatures";
import { generateSlug } from "@/utils/Helpers";
import axios from "node_modules/axios/index";
import { screenshot_api_url } from "@/config/constants";

// add to db => /api/tools
const createTool = catchAsyncErrors(async (req, res) => {
	const userId = req.user._id || req.user.id;
	// save to db
	const { name, url, image, oneLiner, youtubeDemoVideoLink, features, useCases, category, subCategory, pricing, twitter, instagram, linkedin, youtube } =
		req.body;

	if (subCategory) {
		const receivedSubCategory = await SubCategory.findById(subCategory._id);
		if (receivedSubCategory.categoryId.toString() !== category._id.toString()) {
			return next(new ErrorHandler("Sub-category does not belong to the category", 404));
		}
	}

	const sanitizedUseCases = useCases.filter((useCase) => useCase.heading !== "" && useCase.content !== "");

	const tool = await Tool.create({
		user: userId,
		name,
		slug: generateSlug(name),
		url,
		image,
		oneLiner,
		youtubeDemoVideoLink,
		features,
		useCases: sanitizedUseCases,
		category: category._id,
		subCategory: subCategory._id,
		pricing: pricing._id,
		twitter,
		instagram,
		linkedin,
		youtube,
	});

	res.status(200).json({
		success: true,
		tool,
	});
});

const maybeAddLikedTools = async (req, tools) => {
	if (req.user) {
		const userId = req.user._id || req.user.id;
		const likedTools = await LikedTool.find({ user: userId });
		const updatedTools = [];
		tools.forEach((tool) => {
			const updatedTool = { ...tool, liked: false };
			likedTools.forEach((likedTool) => {
				if (likedTool.tool.toString() === tool._id.toString()) {
					updatedTool.liked = true;
				}
			});
			updatedTools.push(updatedTool);
		});

		return updatedTools;
	}
	return tools;
};

// get all tools => /api/tools
const allTools = catchAsyncErrors(async (req, res) => {
	const { category, subcategories, sortby, pricing, meta, search } = req.query;
	let subcategoriesArray = [];
	if (subcategories) subcategoriesArray = subcategories.split(",");

	const pipeline = [];
	if (req.query.type === "trending") {
		pipeline.push({ $match: { verified: true } });
	} else if (req.query.type === "new-tools") {
		const oneWeekAgo = new Date();
		oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

		pipeline.push({
			$match: {
				verified: true,
				createdAt: {
					$gte: oneWeekAgo,
				},
			},
		});
	} else {
		pipeline.push({
			$match: {
				verified: true,
			},
		});
	}

	pipeline.push(
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
		}
	);

	if (search) {
		pipeline.push({
			$match: {
				$or: [
					{ name: { $regex: `^${search}`, $options: "i" } },
					{ "category.name": { $regex: `^${search}`, $options: "i" } },
					{ "subCategory.name": { $regex: `^${search}`, $options: "i" } },
				],
			},
		});
	}

	if (category && category !== "null") {
		const categoryObj = await Category.findOne({ name: { $regex: new RegExp(category, "i") } });
		const categoryId = categoryObj._id;
		pipeline.push({
			$match: {
				"category._id": mongoose.Types.ObjectId(categoryId),
			},
		});
	}

	if (pricing) {
		pipeline.push({
			$match: {
				"pricing.name": pricing,
				"pricing.meta": meta || "",
			},
		});
	}

	if (subcategoriesArray?.length > 0) {
		// const subCategoryIds = subcategories.map((subCategory) => mongoose.Types.ObjectId(subCategory._id));
		pipeline.push({
			$match: {
				"subCategory.name": { $in: subcategoriesArray },
			},
		});
	}

	// Sort based on conditions
	let sorting_condition = { ad: -1, createdAt: -1 };
	if (sortby) {
		if (sortby === "Newest") {
			sorting_condition = { ad: -1, createdAt: -1 };
		} else if (sortby === "Oldest") {
			sorting_condition = { ad: -1, createdAt: 1 };
		}
	}
	if (req.query.type === "trending" || (sortby && sortby === "Most Popular")) {
		pipeline.push(
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
			}
		);
		sorting_condition = { ad: -1, likeCount: -1, createdAt: -1 };
	}

	pipeline.push({ $sort: sorting_condition });

	pipeline.push({
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
	});

	// console.log("pipeline::", pipeline);

	const tools = await Tool.aggregate(pipeline);
	const toolsWithLike = await maybeAddLikedTools(req, tools);

	res.status(200).json({
		success: true,
		tools: toolsWithLike,
	});
});

const getToolsByCategory = async (categoryName) => {
	const category = await Category.findOne({ name: { $regex: new RegExp(categoryName, "i") } });
	const categoryId = category._id;
	const tools = await Tool.aggregate([
		{ $match: { category: categoryId, verified: true } },
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
			$sort: { ad: -1, likeCount: -1, createdAt: -1 },
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
	return tools;
};

const getTrendingTools = async (timeframe) => {
	const tools = await Tool.aggregate([
		{ $match: { verified: true, createdAt: { $gte: new Date(Date.now() - timeframe) } } },
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
			$sort: { ad: -1, likeCount: -1, createdAt: -1 },
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
	return tools;
};

// get all tools for homepage => /api/tools/homepage
const allToolsForHomepage = catchAsyncErrors(async (req, res) => {
	const promises = [
		getToolsByCategory("Marketing"),
		getToolsByCategory("Design"),
		getToolsByCategory("Developer"),
		getToolsByCategory("Productivity"),
		getToolsByCategory("Images"),
		getToolsByCategory("Prompts"),
		getToolsByCategory("Video"),
		getToolsByCategory("Product"),
		getToolsByCategory("Sales"),
	].map(async (categoryPromise) => {
		const tools = await maybeAddLikedTools(req, await categoryPromise);
		return tools;
	});

	const [marketingTools, designTools, developerTools, productivityTools, imagesTools, promptsTools, videoTools, productTools, salesTools] = await Promise.all(
		promises
	);

	res.status(200).json({
		success: true,
		marketingTools,
		designTools,
		developerTools,
		productivityTools,
		imagesTools,
		promptsTools,
		videoTools,
		productTools,
		salesTools,
	});
});

// update tool => /api/tools/:id
const updateTool = catchAsyncErrors(async (req, res, next) => {
	let tool = await Tool.findById(req.query.id);
	if (!tool) {
		return next(new ErrorHandler("No tool found with this id", 404));
	}
	const { category, subCategory, useCases } = req.body;
	if (subCategory) {
		const receivedSubCategory = await SubCategory.findById(subCategory._id);
		if (receivedSubCategory.categoryId.toString() !== category._id.toString()) {
			return next(new ErrorHandler("Sub-category does not belong to the category", 404));
		}
	}

	const sanitizedUseCases = useCases.filter((useCase) => useCase.heading !== "" && useCase.content !== "");

	tool = await Tool.findByIdAndUpdate(
		req.query.id,
		{ ...req.body, useCases: sanitizedUseCases },
		{
			new: true,
			runValidators: true,
			useFindAndModify: false,
		}
	);
	res.status(200).json({ success: true, tool });
});

// delete tool => /api/tools/:id
const deleteTool = catchAsyncErrors(async (req, res, next) => {
	const tool = await Tool.findById(req.query.id);
	if (!tool) {
		return next(new ErrorHandler("No tool found with this id", 404));
	}

	await tool.remove();
	res.status(200).json({ success: true, message: "Sub-Category deleted successfully" });
});

// get tool => /api/tools/:id
const getTool = catchAsyncErrors(async (req, res, next) => {
	const tool = await Tool.findById(req.query.id)
		.populate({
			path: "category",
		})
		.populate({
			path: "subCategory",
		})
		.populate({
			path: "pricing",
		});
	if (!tool) {
		return next(new ErrorHandler("No tool found with this id", 404));
	}

	res.status(200).json({ success: true, tool });
});

// get all tools => /api/admin/tools
const adminGetAllTools = catchAsyncErrors(async (req, res) => {
	const tools = await Tool.find({})
		.populate({
			path: "category",
		})
		.populate({
			path: "subCategory",
		})
		.populate({
			path: "pricing",
		})
		.sort({ createdAt: "desc" });
	const toolsCount = await Tool.countDocuments();

	const verifiedTools = await Tool.find({ verified: true })
		.populate({
			path: "category",
		})
		.populate({
			path: "subCategory",
		})
		.populate({
			path: "pricing",
		})
		.sort({ createdAt: "desc" });

	const unverifiedTools = await Tool.find({ verified: false })
		.populate({
			path: "category",
		})
		.populate({
			path: "subCategory",
		})
		.populate({
			path: "pricing",
		})
		.sort({ createdAt: "desc" });

	res.status(200).json({
		success: true,
		tools,
		verifiedTools,
		unverifiedTools,
		toolsCount,
	});
});

// verify tool => /api/admin/tools/:id/verify
const verifyTool = catchAsyncErrors(async (req, res, next) => {
	let tool = await Tool.findById(req.query.id);
	if (!tool) {
		return next(new ErrorHandler("No tool found with this id", 404));
	}

	const result = await axios.post(`${screenshot_api_url}`, { url: tool.url });

	tool = await Tool.findByIdAndUpdate(req.query.id, { verified: true, image: result.data.Location });
	res.status(200).json({ success: true, tool });
});

// unverify tool => /api/admin/tools/:id/unverify
const unverifyTool = catchAsyncErrors(async (req, res, next) => {
	let tool = await Tool.findById(req.query.id);
	if (!tool) {
		return next(new ErrorHandler("No tool found with this id", 404));
	}

	tool = await Tool.findByIdAndUpdate(req.query.id, { verified: false });
	res.status(200).json({ success: true, tool });
});

// get liked tools => /api/tools/liked
const getMyLikedTools = catchAsyncErrors(async (req, res, next) => {
	const userId = req.user._id || req.user.id;
	const resultsPerPage = 4;
	const likedToolsCount = await LikedTool.countDocuments({ user: userId });

	const apiFeatures = new APIFeatures(LikedTool.find({ user: userId }).sort({ createdAt: "desc" }), req.query).search().filter();
	let likedTools = await apiFeatures.query;
	let filteredToolsCount = likedTools.length;

	apiFeatures.pagination(resultsPerPage);
	likedTools = await apiFeatures.query.clone();

	likedTools = await Tool.populate(likedTools, [
		{
			path: "tool",
			populate: [
				{
					path: "category",
					select: "name",
				},
				{
					path: "subCategory",
					select: "name",
				},
				{
					path: "pricing",
					select: "name meta",
				},
			],
		},
	]);

	const tools = likedTools.map((item) => ({
		...item.tool._doc,
		liked: true,
	}));

	res.status(200).json({
		success: true,
		likedToolsCount,
		resultsPerPage,
		filteredToolsCount,
		likedTools: tools,
	});
});

// get tool by slug => /api/tools/find/:slug
const getToolBySlug = catchAsyncErrors(async (req, res, next) => {
	const tool = await Tool.aggregate([
		{ $match: { slug: req.query.slug } },
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
			},
		},
	]);
	if (!tool || tool.length === 0) {
		return next(new ErrorHandler("No tool found with this name", 404));
	}

	const tools = await maybeAddLikedTools(req, tool);
	const toolWithLike = tools[0];

	const categoryId = toolWithLike.category._id;
	const similarTools = await Tool.aggregate([
		{ $match: { category: categoryId, verified: true } },
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
			$sort: { ad: -1, likeCount: -1, createdAt: -1 },
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

	res.status(200).json({ success: true, tool: { ...toolWithLike, similarTools: similarToolsWithLikes } });
});

// get like count by slug => /api/tools/get-likes/:slug
const getLikeCountBySlug = catchAsyncErrors(async (req, res, next) => {
	const tool = await Tool.findOne({ slug: req.query.slug })
		.populate({
			path: "category",
		})
		.populate({
			path: "subCategory",
		})
		.populate({
			path: "pricing",
		});
	if (!tool) {
		return next(new ErrorHandler("No tool found with this name", 404));
	}

	const likeCount = await LikedTool.countDocuments({ tool: tool._id });

	res.status(200).json({ likes: likeCount });
});

// get featured tools => /api/tools/featured
const getFeaturedTools = catchAsyncErrors(async (req, res, next) => {
	const tools = await Tool.find({ featured: { $exists: true }, verified: true })
		.sort({ featured: 1 })
		.limit(10)
		.populate({
			path: "category",
		})
		.populate({
			path: "subCategory",
		})
		.populate({
			path: "pricing",
		});

	return res.status(200).json({ success: true, tools });
});

const getTrendingSponsoredTools = async () => {
	const pipeline = [
		{
			$match: {
				trendingSponsored: { $exists: true, $ne: 0 },
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
				featured: 1,
				category: { $arrayElemAt: ["$category", 0] },
				subCategory: { $arrayElemAt: ["$subCategory", 0] },
				pricing: { $arrayElemAt: ["$pricing", 0] },
				createdAt: 1,
				likeCount: 1,
				trendingSponsored: 1,
				ad: 1,
			},
		},
	];

	const toolsWithTrendingSponsored = await Tool.aggregate(pipeline);
	return toolsWithTrendingSponsored;
};

// get leaderboard tools => /api/tools/leaderboard
const getLeaderboardTools = catchAsyncErrors(async (req, res, next) => {
	const promises = [getTrendingTools(7 * 24 * 60 * 60 * 1000), getTrendingTools(30 * 24 * 60 * 60 * 1000), getTrendingSponsoredTools()].map(
		async (typePromise) => {
			const tools = await maybeAddLikedTools(req, await typePromise);
			return tools;
		}
	);

	const [trendingToolsOfTheWeek, topToolsOfTheMonth, trendingSponsoredTools] = await Promise.all(promises);

	trendingSponsoredTools.map((tool, idx) => {
		for (let i = 0; i < trendingToolsOfTheWeek.length; i++) {
			if (trendingSponsoredTools[idx].trendingSponsored == i + 1) {
				// Add the sponsored tool at position i in trendingToolsOfTheWeek and shift all other tools after that
				trendingToolsOfTheWeek.splice(i, 0, tool);
			}
		}
	});

	trendingSponsoredTools.map((tool, idx) => {
		for (let i = 0; i < topToolsOfTheMonth.length; i++) {
			if (trendingSponsoredTools[idx].trendingSponsored == i + 1) {
				// Add the sponsored tool at position i in topToolsOfTheMonth and shift all other tools after that
				topToolsOfTheMonth.splice(i, 0, tool);
			}
		}
	});

	res.status(200).json({
		success: true,
		trendingToolsOfTheWeek,
		topToolsOfTheMonth,
	});
});

export {
	createTool,
	allTools,
	allToolsForHomepage,
	updateTool,
	deleteTool,
	getTool,
	adminGetAllTools,
	verifyTool,
	unverifyTool,
	getMyLikedTools,
	getToolBySlug,
	getLikeCountBySlug,
	maybeAddLikedTools,
	getFeaturedTools,
	getLeaderboardTools,
};
