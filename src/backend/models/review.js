import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
	{
		tool: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Tool",
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
		review: {
			type: String,
			required: true,
			maxLength: [500, "Review cannot exceed 500 characters"],
		},
	},
	{ timestamps: true }
);

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);
