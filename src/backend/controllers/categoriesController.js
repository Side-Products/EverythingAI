import Category from "@/backend/models/category";
import SubCategory from "@/backend/models/subCategory";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";
import Tool from "@/backend/models/tool";
import { maybeAddLikedTools } from "@/backend/controllers/toolsController";

// add to db => /api/categories
const createCategory = catchAsyncErrors(async (req, res) => {
	// save to db
	const { name } = req.body;
	const category = await Category.create({ name });

	res.status(200).json({
		success: true,
		category,
	});
});

// get all categories => /api/categories
const allCategories = catchAsyncErrors(async (req, res) => {
	const categories = await Category.find().sort({ name: 1, createdAt: "desc" }).limit(req.query.limit);
	const categoriesCount = await Category.countDocuments();

	res.status(200).json({
		success: true,
		categories,
		categoriesCount,
	});
});

// update category => /api/categories/:id
const updateCategory = catchAsyncErrors(async (req, res, next) => {
	let category = await Category.findById(req.query.id);
	if (!category) {
		return next(new ErrorHandler("No category found with this id", 404));
	}

	category = await Category.findByIdAndUpdate(req.query.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});
	res.status(200).json({ success: true, category });
});

// delete category => /api/categories/:id
const deleteCategory = catchAsyncErrors(async (req, res, next) => {
	const category = await Category.findById(req.query.id);
	if (!category) {
		return next(new ErrorHandler("No category found with this id", 404));
	}

	await category.remove();
	res.status(200).json({ success: true, message: "Category deleted successfully" });
});

// get category => /api/categories/:id
const getCategory = catchAsyncErrors(async (req, res, next) => {
	const categoryId = req.query.id;
	const category = await Category.findById(categoryId);
	if (!category) {
		return next(new ErrorHandler("No category found with this id", 404));
	}

	// Find all subcategories that have the same categoryId as the category
	const subcategories = await SubCategory.find({ categoryId }).sort({ name: 1 });
	res.status(200).json({ success: true, category: { ...category._doc, subcategories } });
});

// get category => /api/categories/:name
const getCategoryByName = catchAsyncErrors(async (req, res, next) => {
	const categoryName = req.query.name;
	const category = await Category.findOne({ name: { $regex: new RegExp(categoryName, "i") } });
	const categoryId = category._id;
	if (!category) {
		return next(new ErrorHandler("No category found with this name", 404));
	}

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
			$sort: { likeCount: -1, createdAt: -1 },
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

	const toolsWithLike = await maybeAddLikedTools(req, tools);

	// Find all subcategories that have the same categoryId as the category
	const subcategories = await SubCategory.find({ categoryId });
	res.status(200).json({ success: true, category: { ...category._doc, subcategories, tools: toolsWithLike } });
});

export { createCategory, allCategories, updateCategory, deleteCategory, getCategory, getCategoryByName };
