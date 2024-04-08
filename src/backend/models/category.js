import mongoose from "mongoose";
import validator from "validator";
import SubCategory from "./subCategory";

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter a name"],
			trim: true,
			maxLength: [100, "Name cannot exceed 100 characters"],
			unique: true,
		},
		image: {
			type: String,
			trim: true,
			validator: (value) =>
				validator.isURL(value, {
					protocols: ["http", "https", "ftp"],
					require_tld: true,
					require_protocol: true,
				}),
		},
		timesVisited: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

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
