import Review from "../models/review";
import Tool from "../models/tool";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";

// add to db => /api/reviews
const createReview = catchAsyncErrors(async (req, res) => {
	// save to db
	const user = req.user._id || req.user.id;
	const { rating, review, slug } = req.body;
	const tool = await Tool.findOne({ slug: slug });
	if (!tool) {
		return next(new ErrorHandler("No tool found with this id", 404));
	}

	const storedReview = await Review.create({ rating, review, user, tool: tool.id });

	res.status(200).json({
		success: true,
		review: storedReview,
	});
});

// get all reviews => /api/reviews
const allReviews = catchAsyncErrors(async (req, res, next) => {
	const tool = await Tool.findOne({ slug: req.body.slug });
	if (!tool) {
		return next(new ErrorHandler("No tool found with this id", 404));
	}

	const reviews = await Review.find({ tool: tool.id })
		.populate({
			path: "user",
		})
		.sort({ createdAt: "desc" });

	res.status(200).json({
		success: true,
		reviews,
	});
});

// update review => /api/reviews/:id
const updateReview = catchAsyncErrors(async (req, res, next) => {
	let review = await Review.findById(req.query.id);
	if (!review) {
		return next(new ErrorHandler("No review found with this id", 404));
	}

	review = await Review.findByIdAndUpdate(req.query.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});
	res.status(200).json({ success: true, review });
});

// delete review => /api/reviews/:id
const deleteReview = catchAsyncErrors(async (req, res, next) => {
	const review = await Review.findById(req.query.id);
	if (!review) {
		return next(new ErrorHandler("No review with this ID", 404));
	}

	await review.remove();
	res.status(200).json({ success: true, message: "Deleted successfully" });
});

export { createReview, allReviews, updateReview, deleteReview };
