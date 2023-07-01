import mongoose from "mongoose";

const collectionToolRelationSchema = new mongoose.Schema(
	{
		toolId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Tool",
			required: true,
		},
		collectionId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Collection",
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.models.CollectionToolRelation || mongoose.model("CollectionToolRelation", collectionToolRelationSchema);
