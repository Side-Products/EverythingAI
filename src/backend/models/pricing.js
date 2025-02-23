import mongoose from "mongoose";

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

export default mongoose.models.Pricing ||
  mongoose.model("Pricing", pricingSchema);
