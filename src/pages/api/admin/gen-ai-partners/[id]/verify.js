import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { verifyPartner } from "@/backend/controllers/genAIPartnersController";
import { isAuthenticatedUser, authorizeRoles } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(verifyPartner);

export default handler;
