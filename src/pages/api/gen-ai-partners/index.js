import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { newGenAIPartner, allGenAIPartners } from "@/backend/controllers/genAIPartnersController";
import { isAuthenticatedUser, maybeAuthenticatedUser } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(maybeAuthenticatedUser).get(allGenAIPartners);
handler.use(isAuthenticatedUser).post(newGenAIPartner);

export default handler;
