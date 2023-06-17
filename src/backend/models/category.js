import mongoose from "mongoose";
import SubCategory from "./subCategory";

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please enter a name"],
		trim: true,
		maxLength: [100, "Name cannot exceed 100 characters"],
		unique: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

// Define the pre "remove" middleware on the Category schema
categorySchema.pre("remove", async function (next) {
	try {
		// Find all subcategories with the categoryId of the current category
		const subcategories = await SubCategory.find({ categoryId: this._id });

		// Remove each subcategory
		for (const subcategory of subcategories) {
			await subcategory.remove();
		}
		next();
	} catch (error) {
		next(error);
	}
});

export default mongoose.models.Category || mongoose.model("Category", categorySchema);
