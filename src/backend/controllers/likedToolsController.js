import LikedTool from "../models/likedTool";
import Tool from "../models/tool";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";

// add to db => /api/like-tool/:id
const createLikedTool = catchAsyncErrors(async (req, res, next) => {
	// save to db
	const toolId = req.query.id;
	const tool = await Tool.findById(toolId);
	if (!tool) {
		return next(new ErrorHandler("No tool found with this id", 404));
	}

	const alreadyLikedTool = await LikedTool.findOne({ tool: toolId, user: req.user._id || req.user.id });
	if (alreadyLikedTool) {
		return next(new ErrorHandler("You have already liked this tool", 403));
	} else {
		const likedTool = await LikedTool.create({ tool: toolId, user: req.user._id || req.user.id });

		res.status(200).json({
			success: true,
			likedTool,
		});
	}
});

// delete liked tool => /api/like-tool/:id
const deleteLikedTool = catchAsyncErrors(async (req, res, next) => {
	const toolId = req.query.id;
	const tool = await Tool.findById(toolId);
	if (!tool) {
		return next(new ErrorHandler("No tool found with this id", 404));
	}

	const likedTool = await LikedTool.findOne({ tool: toolId, user: req.user._id || req.user.id });
	if (!likedTool) {
		return next(new ErrorHandler("No liked tool with this id", 404));
	}

	await likedTool.remove();
	res.status(200).json({ success: true, message: "Tool unliked successfully" });
});

export { createLikedTool, deleteLikedTool };
