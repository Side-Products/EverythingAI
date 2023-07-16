import mongoose from "mongoose";
import validator from "validator";
import LikedTool from "./likedTool";

const toolSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		name: {
			type: String,
			required: [true, "Please enter a name"],
			trim: true,
			maxLength: [100, "Name cannot exceed 100 characters"],
		},
		slug: {
			type: String,
			required: [true, "Please enter a slug"],
			trim: true,
			maxLength: [100, "Slug cannot exceed 100 characters"],
			unique: true,
		},
		url: {
			type: String,
			required: [true, "Please enter a url"],
			trim: true,
			validator: (value) => validator.isURL(value, { protocols: ["http", "https", "ftp"], require_tld: true, require_protocol: true }),
		},
		image: {
			type: String,
			trim: true,
			validator: (value) => validator.isURL(value, { protocols: ["http", "https", "ftp"], require_tld: true, require_protocol: true }),
		},
		logo: {
			type: String,
			trim: true,
			validator: (value) => validator.isURL(value, { protocols: ["http", "https", "ftp"], require_tld: true, require_protocol: true }),
		},
		featured: {
			type: Number,
		},
		trendingSponsored: {
			type: Number,
		},
		oneLiner: {
			type: String,
			required: [true, "Please enter a one liner"],
			trim: true,
			maxLength: [250, "One liner cannot exceed 250 characters"],
		},
		youtubeDemoVideoLink: {
			type: String,
			trim: true,
			validator: (value) => validator.isURL(value, { protocols: ["http", "https", "ftp"], require_tld: true, require_protocol: true }),
		},
		features: {
			type: String,
			trim: true,
		},
		useCases: [
			{
				heading: {
					type: String,
					trim: true,
				},
				content: {
					type: String,
					trim: true,
				},
			},
		],
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Category",
			required: [true, "Please choose a category"],
		},
		subCategory: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "SubCategory",
		},
		pricing: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Pricing",
			required: [true, "Please choose a pricing model"],
		},
		twitter: {
			type: String,
			trim: true,
			validator: (value) => validator.isURL(value, { protocols: ["http", "https", "ftp"], require_tld: true, require_protocol: true }),
		},
		instagram: {
			type: String,
			trim: true,
			validator: (value) => validator.isURL(value, { protocols: ["http", "https", "ftp"], require_tld: true, require_protocol: true }),
		},
		linkedin: {
			type: String,
			trim: true,
			validator: (value) => validator.isURL(value, { protocols: ["http", "https", "ftp"], require_tld: true, require_protocol: true }),
		},
		youtube: {
			type: String,
			trim: true,
			validator: (value) => validator.isURL(value, { protocols: ["http", "https", "ftp"], require_tld: true, require_protocol: true }),
		},
		verified: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

// Define the pre "remove" middleware on the tool schema
toolSchema.pre("remove", async function (next) {
	try {
		// Find all tools with the toolId of the current tool
		const likedTools = await LikedTool.find({ tool: this._id });

		// Remove each tool
		for (const tool of likedTools) {
			await tool.remove();
		}
		next();
	} catch (error) {
		next(error);
	}
});

export default mongoose.models.Tool || mongoose.model("Tool", toolSchema);
