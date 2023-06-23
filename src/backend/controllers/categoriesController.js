import Category from "@/backend/models/category";
import SubCategory from "@/backend/models/subCategory";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";
import Tool from "@/backend/models/tool";

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
	const categories = await Category.find().sort({ createdAt: "desc" }).limit(req.query.limit);
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
	const subcategories = await SubCategory.find({ categoryId });
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
	const tools = await Tool.find({ category: categoryId, verified: true })
		.populate({
			path: "category",
			select: "name",
		})
		.populate({
			path: "subCategory",
			select: "name",
		})
		.populate({
			path: "pricing",
			select: "name meta",
		})
		.sort({ createdAt: "desc" });

	// Find all subcategories that have the same categoryId as the category
	const subcategories = await SubCategory.find({ categoryId });
	res.status(200).json({ success: true, category: { ...category._doc, subcategories, tools } });
});

export { createCategory, allCategories, updateCategory, deleteCategory, getCategory, getCategoryByName };
