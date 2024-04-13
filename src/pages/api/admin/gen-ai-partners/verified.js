import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { adminGetAllVerifiedGenAIPartners } from "@/backend/controllers/genAIPartnersController";
import { isAuthenticatedUser, authorizeRoles } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(adminGetAllVerifiedGenAIPartners);

export default handler;
