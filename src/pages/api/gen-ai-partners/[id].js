import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { deleteGenAIPartner, getGenAIPartner, updateGenAIPartner } from "@/backend/controllers/genAIPartnersController";
import { isAuthenticatedUser, authorizeRoles } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.get(getGenAIPartner);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(updateGenAIPartner);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteGenAIPartner);

export default handler;
