import Tool from "@/backend/models/tool";
import Category from "@/backend/models/category";
import SubCategory from "@/backend/models/subCategory";
import Pricing from "@/backend/models/pricing";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";

// add to db => /api/tools
const createTool = catchAsyncErrors(async (req, res) => {
	// save to db
	const { name, url, image, oneLiner, category, subCategory, pricing, twitter, instagram, linkedin, youtube } = req.body;

	const receivedSubCategory = await SubCategory.findById(subCategory._id);
	if (receivedSubCategory.categoryId.toString() !== category._id.toString()) {
		return next(new ErrorHandler("Sub-category does not belong to the category", 404));
	}

	const tool = await Tool.create({
		name,
		url,
		image,
		oneLiner,
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

// get all tools => /api/tools
const allTools = catchAsyncErrors(async (req, res) => {
	const tools = await Tool.find({ verified: true })
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

	res.status(200).json({
		success: true,
		tools,
	});
});

// update tool => /api/tools/:id
const updateTool = catchAsyncErrors(async (req, res, next) => {
	let tool = await Tool.findById(req.query.id);
	if (!tool) {
		return next(new ErrorHandler("No tool found with this id", 404));
	}
	const { category, subCategory } = req.body;
	const receivedSubCategory = await SubCategory.findById(subCategory._id);
	if (receivedSubCategory.categoryId.toString() !== category._id.toString()) {
		return next(new ErrorHandler("Sub-category does not belong to the category", 404));
	}

	tool = await Tool.findByIdAndUpdate(req.query.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});
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

	tool = await Tool.findByIdAndUpdate(req.query.id, { verified: true });
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

export { createTool, allTools, updateTool, deleteTool, getTool, adminGetAllTools, verifyTool, unverifyTool };
