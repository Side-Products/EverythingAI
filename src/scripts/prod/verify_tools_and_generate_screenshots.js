// Verify tools and generate screenshots
const mongoose = require("mongoose");
const validator = require("validator");
const axios = require("axios");

// GET latest schemas and data from constants.js

// MongoDB connection URL
const MONGODB_URI = "mongodb://0.0.0.0:27017/everythingai";
const screenshot_api_url =
  "http://ec2-13-126-48-229.ap-south-1.compute.amazonaws.com:8080/screenshot";

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
      validator: (value) =>
        validator.isURL(value, {
          protocols: ["http", "https", "ftp"],
          require_tld: true,
          require_protocol: true,
        }),
    },
    utmLink: {
      type: String,
      trim: true,
      validator: (value) =>
        validator.isURL(value, {
          protocols: ["http", "https", "ftp"],
          require_tld: true,
          require_protocol: true,
        }),
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
    logo: {
      type: String,
      trim: true,
      validator: (value) =>
        validator.isURL(value, {
          protocols: ["http", "https", "ftp"],
          require_tld: true,
          require_protocol: true,
        }),
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
      trim: true,
      maxLength: [500, "One liner cannot exceed 500 characters"],
    },
    youtubeDemoVideoLink: {
      type: String,
      trim: true,
      validator: (value) =>
        validator.isURL(value, {
          protocols: ["http", "https", "ftp"],
          require_tld: true,
          require_protocol: true,
        }),
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
      validator: (value) =>
        validator.isURL(value, {
          protocols: ["http", "https", "ftp"],
          require_tld: true,
          require_protocol: true,
        }),
    },
    instagram: {
      type: String,
      trim: true,
      validator: (value) =>
        validator.isURL(value, {
          protocols: ["http", "https", "ftp"],
          require_tld: true,
          require_protocol: true,
        }),
    },
    linkedin: {
      type: String,
      trim: true,
      validator: (value) =>
        validator.isURL(value, {
          protocols: ["http", "https", "ftp"],
          require_tld: true,
          require_protocol: true,
        }),
    },
    youtube: {
      type: String,
      trim: true,
      validator: (value) =>
        validator.isURL(value, {
          protocols: ["http", "https", "ftp"],
          require_tld: true,
          require_protocol: true,
        }),
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Tool = mongoose.model("Tool", toolSchema);

async function verifyToolsAndGenerateScreenshots() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const tools = await Tool.find({});
    // Verify tools
    for (const tool of tools) {
      // if (tool.name == "Get Munch") {
      // 	console.log(`Skipping for Tool "${tool.name}"`);
      // 	continue;
      // }
      if (tool.verified) {
        console.log(`Tool "${tool.name}" already verified.`);
        continue;
      } else {
        try {
          console.log(`Verifying "${tool.name}"... ${tool.url}`);
          tool.verified = true;
          const result = await axios.post(
            `${screenshot_api_url}`,
            { url: tool.url },
            {
              timeout: 20000, // Set timeout to 20 seconds (15,000 milliseconds)
            }
          );
          tool.image = result.data.Location;
          await tool.save();
          console.log(`Tool "${tool.name}" verified successfully.`);
        } catch (e) {
          if (e.message == "timeout of 15000ms exceeded") {
            console.log(
              `!! Timeout exceeded for tool ${tool.name}. Something is probably wrong with the url. !!`
            );
          } else {
            console.log("Error:", e.message);
          }
          continue;
        }
      }
    }

    // Close the connection
    await mongoose.connection.close();
    console.log("Connection closed");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the function to populate the categories and subcategories
verifyToolsAndGenerateScreenshots();
