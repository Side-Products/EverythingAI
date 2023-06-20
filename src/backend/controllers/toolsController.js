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
	const tools = await Tool.find()
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
			select: "name",
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
	const tool = await Tool.findById(req.query.id);
	if (!tool) {
		return next(new ErrorHandler("No tool found with this id", 404));
	}

	res.status(200).json({ success: true, tool });
});

export { createTool, allTools, updateTool, deleteTool, getTool };
