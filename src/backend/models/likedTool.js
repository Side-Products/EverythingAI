import mongoose from "mongoose";

const likedToolSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	tool: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Tool",
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.models.LikedTool || mongoose.model("LikedTool", likedToolSchema);
