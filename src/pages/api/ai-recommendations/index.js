import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { createAiRecommendation, allAiRecommendations } from "@/backend/controllers/aiRecommenderController";
import { isAuthenticatedUser, authorizeRoles } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser).post(createAiRecommendation);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(allAiRecommendations);

export default handler;
