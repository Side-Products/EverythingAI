// Purpose: Controller for purchase terms
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";
import Tool from "../models/tool";
import PurchaseTerm from "../models/purchaseTerm";

// add to db => /api/purchase-terms

const createPurchaseTerm = catchAsyncErrors(async (req, res) => {
  // save to db

  console.log(req.body);

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

export { createPurchaseTerm, getPurchaseTermsByToolId };
