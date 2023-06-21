const mongoose = require("mongoose");
const { categories, tools } = require("./data.js");

// GET latest schemas and data from constants.js

// MongoDB connection URL
const MONGODB_URI = "mongodb://0.0.0.0:27017/everythingai";

// Category schema
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

// Subcategory schema
const subCategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please enter a name"],
		trim: true,
		maxLength: [100, "Name cannot exceed 100 characters"],
	},
	categoryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
		required: true,
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

// Pricing schema
const pricingSchema = new mongoose.Schema({
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

// Tool schema
const toolSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please enter a name"],
		trim: true,
		maxLength: [100, "Name cannot exceed 100 characters"],
	},
	url: {
		type: String,
		required: [true, "Please enter a url"],
		trim: true,
		validator: (value) => validator.isURL(value, { protocols: ["http", "https", "ftp"], require_tld: true, require_protocol: true }),
	},
	image: {
		type: String,
		required: [true, "Please upload an image"],
		trim: true,
		validator: (value) => validator.isURL(value, { protocols: ["http", "https", "ftp"], require_tld: true, require_protocol: true }),
	},
	oneLiner: {
		type: String,
		required: [true, "Please enter a one liner"],
		trim: true,
		maxLength: [250, "One liner cannot exceed 250 characters"],
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
		required: [true, "Please choose a category"],
	},
	subCategory: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "SubCategory",
		required: [true, "Please choose a sub-category"],
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
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

const pricingOptions = [
	"Free",
	"Freemium (Pay as you go)",
	"Free trial (without credit card)",
	"Free trial (with credit card)",
	"Premium (Pay upfront)",
	"Subscription",
	"Custom",
];

// Category model
const Category = mongoose.model("Category", categorySchema);
// Subcategory model
const SubCategory = mongoose.model("SubCategory", subCategorySchema);
// Pricing model
const Pricing = mongoose.model("Pricing", pricingSchema);
// Tool model
const Tool = mongoose.model("Tool", toolSchema);

async function populateCategoriesAndSubCategories() {
	try {
		// Connect to MongoDB
		await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log("Connected to MongoDB");

		// Populate categories collection
		const categoryInsertResult = await Category.insertMany(
			Object.keys(categories).map((category) => ({
				name: category,
			}))
		);
		const categoryIds = categoryInsertResult.map((category) => category._id);
		console.log("Categories inserted successfully:", categoryIds);

		// Populate subcategories collection
		const subCategoryDocuments = [];
		Object.entries(categories).forEach(([category, subcategories], index) => {
			const categoryId = categoryIds[index];
			subcategories.forEach((subcategory) => {
				subCategoryDocuments.push({
					name: subcategory,
					categoryId: categoryId,
				});
			});
		});
		const subCategoryInsertResult = await SubCategory.insertMany(subCategoryDocuments);
		console.log("Subcategories inserted successfully:", subCategoryInsertResult);

		// Populate pricing collection
		const pricingInsertResult = await Pricing.insertMany(
			pricingOptions.map((pricing) => ({
				name: pricing,
			}))
		);
		const pricingIds = pricingInsertResult.map((pricing) => pricing._id);
		console.log("Pricing inserted successfully:", pricingIds);

		// Assign random pricing values to each tool
		tools.forEach((tool) => {
			const randomIndex = Math.floor(Math.random() * pricingIds.length);
			tool.pricing = mongoose.Types.ObjectId(pricingIds[randomIndex].toString());
			console.log("Tool pricing:", tool.pricing);
		});
		// Assign random category and subCategory values to each tool
		tools.forEach((tool) => {
			const randomIndex = Math.floor(Math.random() * subCategoryInsertResult.length);
			const { categoryId, _id } = subCategoryInsertResult[randomIndex];
			tool.category = mongoose.Types.ObjectId(categoryId.toString());
			tool.subCategory = mongoose.Types.ObjectId(_id.toString());
		});

		// Insert the tools into the database
		const toolsInsertResult = await Tool.insertMany(tools);
		const toolsIds = toolsInsertResult.map((tool) => tool._id);
		console.log("Tools inserted successfully:", toolsIds);

		// Close the connection
		await mongoose.connection.close();
		console.log("Connection closed");
	} catch (error) {
		console.error("Error:", error);
	}
}

// Call the function to populate the categories and subcategories
populateCategoriesAndSubCategories();
