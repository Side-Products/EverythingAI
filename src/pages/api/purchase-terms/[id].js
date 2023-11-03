import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";
import {
  createPurchaseTerm,
  getPurchaseTermsByToolId,
  updatePurchaseTerms,
} from "@/backend/controllers/purchaseTermsController";

const handler = nc({ onError });

dbConnect();

handler
  .use(isAuthenticatedUser, authorizeRoles("admin"))
  .post(createPurchaseTerm);

handler
  .use(isAuthenticatedUser, authorizeRoles("admin"))
  .put(updatePurchaseTerms);
handler.get(getPurchaseTermsByToolId);

export default handler;
