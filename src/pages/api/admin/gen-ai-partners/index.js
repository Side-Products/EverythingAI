import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { adminGetAllGenAIPartners } from "@/backend/controllers/genAIPartnersController";
import { isAuthenticatedUser, authorizeRoles } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(adminGetAllGenAIPartners);

export default handler;
