const mongoose = require("mongoose");
const validator = require("validator");
const { categories, tools, pricingOptions, collections } = require("../data/data.js");
const XLSX = require("xlsx");

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
		utmLink: {
			type: String,
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
		ad: {
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

const capitalize = (item) => {
	return item.toLowerCase().charAt(0).toUpperCase() + item.slice(1);
};

function formatArrayToText(arr) {
	return arr.join("\n");
}

const formatStringToText = (str) => {
	return str.slice(1, -1).split(". ").join("\n");
};

const readExcelData = () => {
	// Load the Excel file
	const workbook = XLSX.readFile("/Users/pushpitbhardwaj/Desktop/eai/codebase/everythingai/output.xlsx");

	// Select the first sheet
	const worksheet = workbook.Sheets[workbook.SheetNames[0]];

	// Get the range of the sheet
	const range = XLSX.utils.decode_range(worksheet["!ref"]);

	// Convert each row into a JSON object
	const rowData = [];
	for (let i = range.s.r; i <= range.e.r; i++) {
		const row = {};
		for (let j = range.s.c; j <= range.e.c; j++) {
			const cellAddress = XLSX.utils.encode_cell({ r: i, c: j });
			const cell = worksheet[cellAddress];
			const columnName = XLSX.utils.encode_col(j);

			row[columnName] = cell ? cell.v : null;
		}
		rowData.push(row);
	}

	// Print the resulting JSON objects
	console.log(rowData[0]);

	// Remove the first object from rowData
	console.log("Removing column names");
	rowData.shift();

	console.log("\n\nData format:", rowData[0]);

	const formattedData = [];
	for (const obj of rowData) {
		const convertedObj = {};
		for (const [key, value] of Object.entries(obj)) {
			if (key === "A") {
				convertedObj["name"] = value?.trim();
			} else if (key === "B") {
				convertedObj["url"] = value?.trim();
			} else if (key === "G") {
				convertedObj["utmLink"] = value?.trim();
			} else if (key === "H") {
				convertedObj["oneLiner"] = value?.trim();
			} else if (key === "I") {
				convertedObj["youtubeDemoVideoLink"] = value && value !== "NA" ? value?.trim() : "";
			} else if (key === "J") {
				const inputArray = JSON.parse(value?.trim());
				// Check if the parsed data is an array
				if (!Array.isArray(inputArray)) {
					const res = formatStringToText(value?.trim());
					convertedObj["features"] = res;
				} else {
					const res = formatArrayToText(inputArray);
					convertedObj["features"] = res;
				}
			} else if (key === "K") {
				convertedObj["category"] = value?.trim();
			} else if (key === "L") {
				convertedObj["subCategory"] = value && !value.includes("---") ? value?.trim() : "";
			} else if (key === "M") {
				convertedObj["pricing"] = {
					name: capitalize(obj["M"].trim()),
					meta: "",
				};
			} else if (key === "N") {
				if (obj["N"]) {
					convertedObj["pricing"] = {
						name: capitalize(obj["M"].trim()),
						meta: capitalize(obj["N"].trim()),
					};
				}
			} else if (key === "O") {
				convertedObj["twitter"] = value && value !== "NA" ? value?.trim() : "";
			} else if (key === "P") {
				convertedObj["instagram"] = value && value !== "NA" ? value?.trim() : "";
			} else if (key === "Q") {
				convertedObj["linkedin"] = value && value !== "NA" ? value?.trim() : "";
			} else if (key === "R") {
				convertedObj["youtube"] = value && value !== "NA" ? value?.trim() : "";
			} else {
				if (key === "S") {
					const inputArray = JSON.parse(value?.trim());
					convertedObj["useCases"] = inputArray;
				}
			}
		}
		formattedData.push(convertedObj);
	}

	console.log("\n\nFormatted Data:", formattedData[3]);

	return formattedData;
};

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
				// await deleteDatabase();
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

		console.log("Data mismatch check complete");

		// return;

		// Connect to MongoDB
		await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log("Connected to MongoDB");

		const user = await User.findOne({}).sort({ createdAt: "asc" });
		console.log("User found:", user);

		const allCategories = await Category.find();
		const allSubCategories = await SubCategory.find();
		const allPricings = await Pricing.find();
		const allTools = await Tool.find();

		const filteredData = [];

		for (const tool of data) {
			tool.slug = generateSlug(tool.name);
			const toolAlreadyPresent = allTools.find((_tool) => _tool.slug === tool.slug);
			if (toolAlreadyPresent) {
				console.log(`Tool: ${tool.name} is already present in the database. Skipping...`);
				continue;
			}
			if (user) tool.user = mongoose.Types.ObjectId(user._id.toString());

			// Set category and subcategory
			const categoryName = tool.category;
			if (categoryName && categories.hasOwnProperty(categoryName)) {
				// Get the category ID from the categories object
				const category = await allCategories.find((cat) => cat.name === categoryName);
				const categoryId = category._id;
				if (!categoryId) {
					console.error(`Category ID not found for category: ${categoryName}`);
					await deleteDatabase();
				}
				tool.category = mongoose.Types.ObjectId(categoryId.toString());

				const subCategoryName = tool.subCategory;
				if (subCategoryName) {
					const subCategory = await allSubCategories.find(
						(subcategory) => subcategory.name === subCategoryName && subcategory.categoryId.equals(categoryId)
					);
					if (subCategory) {
						tool.subCategory = mongoose.Types.ObjectId(subCategory._id.toString());
					} else {
						console.error(`Subcategory "${tool.subCategory}" not found in category "${category.name}" for tool: ${tool.name}`);
						delete tool.subCategory;
						// await deleteDatabase();
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
				const pricing = await allPricings.find((pricingOption) => pricingOption.name === name && pricingOption.meta === meta);
				if (pricing) {
					tool.pricing = mongoose.Types.ObjectId(pricing._id.toString());
				} else {
					console.error(`Pricing option not found for tool: ${tool.name}`);
				}
			}

			tool.verified = true;
			filteredData.push(tool);
		}

		// Insert the tools into the database
		const toolsInsertResult = await Tool.insertMany(filteredData);
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
