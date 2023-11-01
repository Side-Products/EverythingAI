import mongoose from "mongoose";

const aiRecommenderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    whatAreYouHereFor: {
      type: String,
      required: [true, "Please enter a reason"],
      trim: true,
      maxLength: [100, "Value cannot exceed 100 characters"],
    },
    workFor: {
      type: String,
      required: true,
      trim: true,
      maxLength: [100, "Value cannot exceed 100 characters"],
    },
    category: {
      type: String,
      required: true,
      trim: true,
      maxLength: [100, "Value cannot exceed 100 characters"],
    },
    subCategory: {
      type: String,
      required: true,
      trim: true,
      maxLength: [100, "Value cannot exceed 100 characters"],
    },
    helpsMeWith: {
      type: String,
      trim: true,
      maxLength: [400, "Value cannot exceed 400 characters"],
    },
    whatsImportant: {
      type: Array,
    },
    companySize: {
      type: String,
      required: true,
      trim: true,
      maxLength: [100, "Value cannot exceed 100 characters"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.AiRecommender ||
  mongoose.model("AiRecommender", aiRecommenderSchema);
