import mongoose from "mongoose";
import validator from "validator";

const purchaseTermSchema = new mongoose.Schema({
	tool: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Tool",
		required: true,
	},
	isActive: {
		type: Boolean,
		required: true,
	},

	terms: [
		{
			termLength: {
				type: String,
				enum: ["1 Month", "3 Months", "6 Months", "1 Year"],
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
				maxLength: [5000, "Terms and conditions cannot exceed 500 characters"],
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
		maxLength: [5000, "Description cannot exceed 500 characters"],
	},
});

export default mongoose.models.PurchaseTerm || mongoose.model("PurchaseTerm", purchaseTermSchema);
