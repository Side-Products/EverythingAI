import mongoose from "mongoose";
import validator from "validator";

const genAIPartnerSchema = new mongoose.Schema(
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
		oneLiner: {
			type: String,
			trim: true,
			maxLength: [500, "One liner cannot exceed 500 characters"],
		},
		country: {
			type: String,
			trim: true,
		},
		state: {
			type: String,
			trim: true,
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
		videoLink: {
			type: String,
			trim: true,
			validator: (value) =>
				validator.isURL(value, {
					protocols: ["http", "https", "ftp"],
					require_tld: true,
					require_protocol: true,
				}),
		},
		sizeOfCompany: {
			type: String,
			trim: true,
		},
		industriesSpecializedIn: [
			{
				type: String,
				trim: true,
			},
		],
		capabilities: [
			{
				type: String,
				trim: true,
			},
		],
		offerOneLiner: {
			type: String,
			trim: true,
			maxLength: [500, "Offer one liner cannot exceed 500 characters"],
		},
		caseStudies: [
			{
				type: String,
				trim: true,
			},
		],
		partners: [
			{
				type: String,
				trim: true,
			},
		],
		reviewFromCompanies: [
			{
				companyName: {
					type: String,
					trim: true,
				},
				review: {
					type: String,
					trim: true,
				},
			},
		],
		cta: {
			type: String,
			trim: true,
		},
		verified: {
			type: Boolean,
			default: false,
		},
		timesVisited: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

export default mongoose.models.GenAIPartner || mongoose.model("GenAIPartner", genAIPartnerSchema);
