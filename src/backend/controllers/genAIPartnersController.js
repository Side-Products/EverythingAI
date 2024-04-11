import GenAIPartner from "../models/genAiPartner";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";
import { generateSlug } from "@/utils/Helpers";

// add to db => /api/gen-ai-partners
const newGenAIPartner = catchAsyncErrors(async (req, res) => {
	// save to db
	const {
		name,
		logo,
		oneLiner,
		country,
		state,
		twitter,
		linkedin,
		instagram,
		youtube,
		videoLink,
		sizeOfCompany,
		industriesSpecializedIn,
		capabilities,
		offerOneLiner,
		caseStudies,
		partners,
		reviewFromCompanies,
		cta,
	} = req.body;

	const sanitizedCaseStudies = caseStudies.filter((caseStudy) => caseStudy !== "");
	const sanitizedPartners = partners.filter((partner) => partner !== "");
	const sanitizedReviewFromCompanies = reviewFromCompanies.filter(
		(reviewFromCompany) => reviewFromCompany.companyName !== "" && reviewFromCompany.review !== ""
	);

	const genAIPartner = await GenAIPartner.create({
		name,
		slug: generateSlug(name),
		logo,
		oneLiner,
		country,
		state,
		twitter,
		linkedin,
		instagram,
		youtube,
		videoLink,
		sizeOfCompany,
		industriesSpecializedIn,
		capabilities,
		offerOneLiner,
		caseStudies: sanitizedCaseStudies,
		partners: sanitizedPartners,
		reviewFromCompanies: sanitizedReviewFromCompanies,
		cta,
	});

	res.status(200).json({
		success: true,
		partner: genAIPartner,
	});
});

// get all gen ai partners => /api/gen-ai-partners
const allGenAIPartners = catchAsyncErrors(async (req, res) => {
	const genAIPartners = await GenAIPartner.find().sort({ createdAt: "desc" });

	res.status(200).json({
		success: true,
		genAIPartners,
	});
});

// delete gen ai partner => /api/admin/gen-ai-partners/:id
const deleteGenAIPartner = catchAsyncErrors(async (req, res, next) => {
	const genAIPartner = await GenAIPartner.findById(req.query.id);
	if (!genAIPartner) {
		return next(new ErrorHandler("No partner with this id", 404));
	}

	await genAIPartner.remove();
	res.status(200).json({ success: true, message: "Deleted successfully" });
});

// get single gen ai partner details => /api/gen-ai-partners/:id
const getGenAIPartner = catchAsyncErrors(async (req, res) => {
	const genAIPartner = await GenAIPartner.findById(req.query.id);

	if (!genAIPartner) {
		return res.status(404).json({
			success: false,
			message: "Gen AI Partner not found",
		});
	}

	res.status(200).json({
		success: true,
		genAIPartner,
	});
});

// get partner by slug => /api/gen-ai-partners/find/:slug
const getGenAIPartnerBySlug = catchAsyncErrors(async (req, res, next) => {
	const partner = await GenAIPartner.findOne({ slug: req.query.slug });
	if (!partner || partner.length === 0) {
		return next(new ErrorHandler("No partner found with this name", 404));
	}

	await GenAIPartner.findByIdAndUpdate(partner._id.toString(), {
		timesVisited: (partner.timesVisited || 0) + 1,
	});

	res.status(200).json({
		success: true,
		partner,
	});
});

// update gen ai partner => /api/gen-ai-partners/:id
const updateGenAIPartner = catchAsyncErrors(async (req, res) => {
	const {
		name,
		logo,
		oneLiner,
		country,
		state,
		twitter,
		linkedin,
		instagram,
		youtube,
		videoLink,
		sizeOfCompany,
		industriesSpecializedIn,
		capabilities,
		offerOneLiner,
		caseStudies,
		partners,
		reviewFromCompanies,
		cta,
	} = req.body;

	const sanitizedCaseStudies = caseStudies.filter((caseStudy) => caseStudy !== "");
	const sanitizedPartners = partners.filter((partner) => partner !== "");
	const sanitizedReviewFromCompanies = reviewFromCompanies.filter(
		(reviewFromCompany) => reviewFromCompany.companyName !== "" && reviewFromCompany.review !== ""
	);

	let genAIPartner = await GenAIPartner.findById(req.query.id);

	if (!genAIPartner) {
		return res.status(404).json({
			success: false,
			message: "Gen AI Partner not found",
		});
	}

	genAIPartner = await GenAIPartner.findByIdAndUpdate(
		req.query.id,
		{
			name,
			logo,
			oneLiner,
			country,
			state,
			twitter,
			linkedin,
			instagram,
			youtube,
			videoLink,
			sizeOfCompany,
			industriesSpecializedIn,
			capabilities,
			offerOneLiner,
			caseStudies: sanitizedCaseStudies,
			partners: sanitizedPartners,
			reviewFromCompanies: sanitizedReviewFromCompanies,
			cta,
		},
		{
			new: true,
			runValidators: true,
			useFindAndModify: false,
		}
	);

	res.status(200).json({
		success: true,
		genAIPartner,
	});
});

export { newGenAIPartner, allGenAIPartners, deleteGenAIPartner, getGenAIPartner, updateGenAIPartner, getGenAIPartnerBySlug };
