// Purpose: Controller for purchase terms
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";
import Tool from "../models/tool";
import PurchaseTerm from "../models/purchaseTerm";

// add to db => /api/purchase-terms

const createPurchaseTerm = catchAsyncErrors(async (req, res) => {
  // save to db
  // find by id
  const toolId = req.query.id;
  const tool = await Tool.findById(toolId);

  if (!tool) {
    return next(new ErrorHandler("No tool found with this id", 404));
  }
  const { terms, toolOwnerEmail, description, isActive } = req.body;
  const purchase_term = await PurchaseTerm.create({
    tool: toolId,
    terms,
    toolOwnerEmail,
    description,
    isActive,
  });

  res.status(200).json({
    success: true,
    purchase_term,
  });
});

const getPurchaseTermsByToolSlug = catchAsyncErrors(async (req, res) => {
  const toolSlug = req.query.slug;
  console.log(toolSlug);
  const tool = await Tool.findOne({ slug: toolSlug });
  if (!tool) {
    return next(new ErrorHandler("No tool found with this id", 404));
  }
  const purchaseTerms = await PurchaseTerm.findOne({ tool: tool._id });
  if (!purchaseTerms) {
    return next(new ErrorHandler("No purchase terms found with this id", 404));
  }
  res.status(200).json({
    success: true,
    purchaseTerms,
  });
});

const getPurchaseTermsByToolId = catchAsyncErrors(async (req, res) => {
  const toolId = req.query.id;
  console.log(toolId);
  const purchaseTerms = await PurchaseTerm.find({ tool: toolId });
  if (!purchaseTerms) {
    return next(new ErrorHandler("No purchase terms found with this id", 404));
  }
  res.status(200).json({
    success: true,
    purchaseTerms,
  });
});

// edit purchase terms => /api/purchase-terms/:id

const updatePurchaseTerms = catchAsyncErrors(async (req, res) => {
  const toolId = req.query.id;
  console.log("updateToolId", toolId);
  const purchaseTerm = await PurchaseTerm.findOne({ tool: toolId });

  if (!purchaseTerm) {
    return next(new ErrorHandler("No purchaseTerm found with this id", 404));
  }
  const { terms, toolOwnerEmail, description, isActive } = req.body;
  const editedPurchaseTerm = await PurchaseTerm.findByIdAndUpdate(
    purchaseTerm._id,
    {
      terms,
      toolOwnerEmail,
      description,
      isActive,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    editedPurchaseTerm,
  });
});

export {
  createPurchaseTerm,
  getPurchaseTermsByToolId,
  getPurchaseTermsByToolSlug,
  updatePurchaseTerms,
};
