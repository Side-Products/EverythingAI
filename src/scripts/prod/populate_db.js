const mongoose = require("mongoose");
const validator = require("validator");
const { categories, tools, pricingOptions, collections } = require("../data/data.js");
const { readExcelData } = require("./read_excel");

// GET latest schemas and data from constants.js

// MongoDB connection URL
const MONGODB_URI = "mongodb://0.0.0.0:27017/everythingai";

const generateSlug = (name) => name.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();

// Category schema
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
			validator: (value) => validator.isURL(value, { protocols: ["http", "https", "ftp"], require_tld: true, require_protocol: true }),
		},
	},
	{ timestamps: true }
);

// Subcategory schema
const subCategorySchema = new mongoose.Schema(
	{
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
	},
	{ timestamps: true }
);

// Pricing schema
const pricingSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter a name"],
			trim: true,
			maxLength: [100, "Name cannot exceed 100 characters"],
		},
		meta: {
			type: String,
			trim: true,
			maxLength: [100, "Meta cannot exceed 100 characters"],
		},
	},
	{ timestamps: true }
);

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter a name"],
			trim: true,
			maxLength: [50, "Name cannot exceed 50 characters"],
		},
		email: {
			type: String,
			required: [true, "Please enter your email"],
			trim: true,
			unique: true,
			validate: [validator.isEmail, "Please enter a valid email"],
		},
		password: {
			type: String,
			required: [true, "Please enter your password"],
			trim: true,
			minLength: [6, "Your password must be at least 6 characters long"],
			select: false,
		},
		image: {
			type: String,
		},
		role: {
			type: String,
			default: "user",
		},
		resetPasswordToken: String,
		resetPasswordExpire: Date,
	},
	{ timestamps: true }
);
const User = mongoose.model("User", userSchema);
// Tool schema
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

// Collection schema
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
		image: {
			type: String,
			trim: true,
			validator: (value) => validator.isURL(value, { protocols: ["http", "https", "ftp"], require_tld: true, require_protocol: true }),
		},
		description: {
			type: String,
			required: [true, "Please enter a description"],
			trim: true,
			maxLength: [500, "Description cannot exceed 500 characters"],
		},
		metaDescription: {
			type: String,
			trim: true,
			maxLength: [3000, "Meta description cannot exceed 3000 characters"],
		},
	},
	{ timestamps: true }
);

// Category model
const Category = mongoose.model("Category", categorySchema);
// Subcategory model
const SubCategory = mongoose.model("SubCategory", subCategorySchema);
// Pricing model
const Pricing = mongoose.model("Pricing", pricingSchema);
// Tool model
const Tool = mongoose.model("Tool", toolSchema);
// Collection model
const Collection = mongoose.model("Collection", collectionSchema);

async function deleteDatabase() {
	try {
		// await mongoose.connection.dropDatabase();
		// console.log("Database deleted successfully");
		process.exit();
	} catch (error) {
		console.error("Error deleting the database:", error);
	}
}

async function populateCategoriesAndSubCategories() {
	try {
		const data = readExcelData();

		// Checks for data mismatch
		data.forEach(async (tool) => {
			const category = tool.category;
			const subCategory = tool.subCategory;

			if (!categories.hasOwnProperty(category)) {
				console.log(`Category "${category}" not found in the categories object for tool "${tool.name}"`);
				await deleteDatabase();
			}
			if (subCategory !== "" && !categories[category]?.includes(subCategory)) {
				console.log(`Mismatch found: Tool "${tool.name}" has a different subCategory "${subCategory}" for category "${category}"`);
				await deleteDatabase();
			}

			let matchedPricingOption = false;
			for (const option of pricingOptions) {
				if (tool.pricing.name == option.name && tool.pricing.meta == option.meta) {
					matchedPricingOption = true;
					break;
				}
			}

			if (!matchedPricingOption) {
				console.log(`No matching pricing option found for tool "${tool.name}". ${JSON.stringify(tool.pricing)}`);
				await deleteDatabase();
			}

			// Check if the tool.url starts with "http://" or "https://"
			if (!tool.url.startsWith("http://") && !tool.url.startsWith("https://")) {
				console.log(`Invalid URL format for tool "${tool.name}". The URL must start with "http://" or "https://"`);
				await deleteDatabase();
			}
		});

		// Connect to MongoDB
		await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log("Connected to MongoDB");

		// Populate categories collection
		const categoryInsertResult = await Category.insertMany(
			Object.keys(categories).map((category) => ({
				name: category,
				image: "https://everythingai.s3.amazonaws.com/171ebe4a-2f9b-42cc-aa5f-7e4652705f3f.jpg",
			}))
		);
		const categoryIds = categoryInsertResult.map((category) => category._id);
		console.log("Categories inserted successfully:", categoryIds);

		// Populate subcategories collection
		const subCategoryDocuments = [];
		Object.entries(categories).forEach(async ([category, subcategories]) => {
			const categoryId = categoryIds.find(async (id) => {
				const foundCategory = await Category.findById(id);
				return foundCategory.name === category;
			});
			if (!categoryId) {
				console.error(`Category ID not found for category: ${category}`);
				await deleteDatabase();
			}
			subcategories.forEach((subcategory) => {
				subCategoryDocuments.push({
					name: subcategory,
					categoryId: categoryId,
				});
			});
		});
		const subCategoryInsertResult = await SubCategory.insertMany(subCategoryDocuments);
		console.log(subCategoryInsertResult.length, "Subcategories inserted successfully");

		// Populate pricing collection
		const pricingInsertResult = await Pricing.insertMany(pricingOptions);
		const pricingIds = pricingInsertResult.map((pricing) => pricing._id);
		console.log("Pricing options inserted successfully:", pricingIds);

		// Populate collections collection
		collections.forEach((collection) => {
			collection.slug = generateSlug(collection.name);
		});
		// Insert the collections into the database
		const collectionInsertResult = await Collection.insertMany(collections);
		const collectionIds = collectionInsertResult.map((collection) => collection._id);
		console.log("Collections inserted successfully:", collectionIds);

		const user = await User.findOne({}).sort({ createdAt: "asc" });
		console.log("User found:", user);

		for (const tool of data) {
			tool.slug = generateSlug(tool.name);
			if (user) tool.user = mongoose.Types.ObjectId(user._id.toString());

			// Set category and subcategory
			const categoryName = tool.category;
			if (categoryName && categories.hasOwnProperty(categoryName)) {
				// Get the category ID from the categories object
				const categoryId = categoryIds.find(async (id) => {
					const foundCategory = await Category.findById(id);
					return foundCategory.name === categoryName;
				});
				if (!categoryId) {
					console.error(`Category ID not found for category: ${categoryName}`);
					await deleteDatabase();
				}
				tool.category = mongoose.Types.ObjectId(categoryId.toString());

				const subCategoryName = tool.subCategory;
				if (subCategoryName) {
					const subCategory = subCategoryInsertResult.find(
						(subcategory) => subcategory.name === subCategoryName && subcategory.categoryId.toString() === categoryId.toString()
					);
					if (subCategory) {
						tool.subCategory = mongoose.Types.ObjectId(subCategory._id.toString());
					} else {
						console.error(`Subcategory not found for tool: ${tool.name}`);
						await deleteDatabase();
					}
				} else {
					delete tool.subCategory;
				}
			} else {
				console.error(`Category not found for tool: ${tool.name}`);
			}

			// Lookup pricing name and meta in pricingOptions array
			const { name, meta } = tool.pricing;
			if (name) {
				const pricing = pricingInsertResult.find((pricingOption) => pricingOption.name === name && pricingOption.meta === meta);
				if (pricing) {
					tool.pricing = mongoose.Types.ObjectId(pricing._id.toString());
				} else {
					console.error(`Pricing option not found for tool: ${tool.name}`);
				}
			}
		}

		// Insert the tools into the database
		const toolsInsertResult = await Tool.insertMany(data);
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
