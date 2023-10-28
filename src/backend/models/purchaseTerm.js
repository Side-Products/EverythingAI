import mongoose from "mongoose";
import validator from "validator";

const purchaseTermSchema = new mongoose.Schema({
  tool: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tool",
    required: true,
  },
  terms: [
    {
      termLength: {
        type: String,
        enum: ["1 month", "3 months", "6 months", "1 year"],
        required: true,
      },
      couponCode: {
        type: String,
        required: true,
        maxLength: [100, "Coupon code cannot exceed 100 characters"],
      },
      actualPrice: {
        type: Number,
        required: true,
        min: [0, "Price must be a positive number or zero"],
      },
      discountedPrice: {
        type: Number,
        required: true,
        min: [0, "Price must be a positive number or zero"],
      },
      termsAndConditions: {
        type: String,
        required: false,
        maxLength: [500, "Terms and conditions cannot exceed 500 characters"],
      },
      limit: {
        type: Number,
        required: true,
        min: [0, "limit must be a positive number or zero"],
      },
    },
  ],
  toolOwnerEmail: {
    type: [
      {
        type: String,
        required: true,
        validate: (value) => validator.isEmail(value, { require_tld: true }),
      },
    ],
    validate: {
      validator: function (emails) {
        return emails.length <= 4;
      },
      message: "toolOwnerEmail can have at most 4 emails",
    },
  },
  description: {
    type: String,
    required: true,
    maxLength: [500, "Description cannot exceed 500 characters"],
  },
});

export default mongoose.models.PurchaseTerm ||
  mongoose.model("PurchaseTerm", purchaseTermSchema);
