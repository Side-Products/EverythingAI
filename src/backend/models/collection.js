import mongoose from "mongoose";
import CollectionToolRelation from "./collectionToolRelation";

const collectionSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter a name"],
			trim: true,
			maxLength: [100, "Name cannot exceed 100 characters"],
			unique: true,
		},
		slug: {
			type: String,
			required: [true, "Please enter a slug"],
			trim: true,
			maxLength: [100, "Slug cannot exceed 100 characters"],
			unique: true,
		},
		description: {
			type: String,
			required: [true, "Please enter a description"],
			trim: true,
			maxLength: [500, "Description cannot exceed 500 characters"],
		},
	},
	{ timestamps: true }
);

// Define the pre "remove" middleware on the Category schema
collectionSchema.pre("remove", async function (next) {
	try {
		// Find all subcategories with the categoryId of the current category
		const relations = await CollectionToolRelation.find({ collectionId: this._id });

		// Remove each relation
		for (const relation of relations) {
			await relation.remove();
		}
		next();
	} catch (error) {
		next(error);
	}
});

export default mongoose.models.Collection || mongoose.model("Collection", collectionSchema);
