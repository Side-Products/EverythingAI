import SubCategory from "@/backend/models/subCategory";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";

// add to db => /api/sub-categories
const createSubCategory = catchAsyncErrors(async (req, res) => {
	// save to db
	const { name, categoryId } = req.body;
	const subCategory = await SubCategory.create({ name, categoryId });

	res.status(200).json({
		success: true,
		subCategory,
	});
});

// get all sub-categories => /api/sub-categories
const allSubCategories = catchAsyncErrors(async (req, res) => {
	const subcategories = await SubCategory.find().sort({
		name: 1,
		createdAt: "desc",
	});

	res.status(200).json({
		success: true,
		subcategories,
	});
});

// update subCategory => /api/sub-categories/:id
const updateSubCategory = catchAsyncErrors(async (req, res, next) => {
	let subCategory = await SubCategory.findById(req.query.id);
	if (!subCategory) {
		return next(new ErrorHandler("No sub-category found with this id", 404));
	}

	subCategory = await SubCategory.findByIdAndUpdate(req.query.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});
	res.status(200).json({ success: true, subCategory });
});

// delete subCategory => /api/sub-categories/:id
const deleteSubCategory = catchAsyncErrors(async (req, res, next) => {
	const subCategory = await SubCategory.findById(req.query.id);
	if (!subCategory) {
		return next(new ErrorHandler("No sub-category found with this id", 404));
	}

	await subCategory.remove();
	res.status(200).json({ success: true, message: "Sub-Category deleted successfully" });
});

// get subCategory => /api/sub-categories/:id
const getSubCategory = catchAsyncErrors(async (req, res, next) => {
	const subCategory = await SubCategory.findById(req.query.id);
	if (!subCategory) {
		return next(new ErrorHandler("No sub-category found with this id", 404));
	}

	res.status(200).json({ success: true, subCategory });
});

export { createSubCategory, allSubCategories, updateSubCategory, deleteSubCategory, getSubCategory };
