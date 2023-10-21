import Pricing from "../models/pricing";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";

// add to db => /api/pricings
const createPricing = catchAsyncErrors(async (req, res) => {
  // save to db
  const { name, meta } = req.body;
  const pricing = await Pricing.create({ name, meta });

  res.status(200).json({
    success: true,
    pricing,
  });
});

// get all pricings => /api/pricings
const allPricings = catchAsyncErrors(async (req, res) => {
  const pricings = await Pricing.find().sort({ createdAt: "desc" });

  res.status(200).json({
    success: true,
    pricings,
  });
});

// delete pricing => /api/pricings/:id
const deletePricing = catchAsyncErrors(async (req, res, next) => {
  const pricing = await Pricing.findById(req.query.id);
  if (!pricing) {
    return next(new ErrorHandler("No pricing with this ID", 404));
  }

  await pricing.remove();
  res.status(200).json({ success: true, message: "Deleted successfully" });
});

export { createPricing, allPricings, deletePricing };
