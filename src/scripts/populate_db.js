const mongoose = require("mongoose");
const { categories } = require("./data.js");

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
		await SubCategory.insertMany(subCategoryDocuments);
		console.log("Subcategories inserted successfully");

		// Populate pricing collection
		const pricingInsertResult = await Pricing.insertMany(
			pricingOptions.map((pricing) => ({
				name: pricing,
			}))
		);
		const pricingIds = pricingInsertResult.map((pricing) => pricing._id);
		console.log("Pricing inserted successfully:", pricingIds);

		// Close the connection
		await mongoose.connection.close();
		console.log("Connection closed");
	} catch (error) {
		console.error("Error:", error);
	}
}

// Call the function to populate the categories and subcategories
populateCategoriesAndSubCategories();
