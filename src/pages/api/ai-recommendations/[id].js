import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import {
  getAiRecommendation,
  deleteAiRecommendation,
} from "@/backend/controllers/aiRecommenderController";
import {
  isAuthenticatedUser,
  maybeAuthenticatedUser,
  authorizeRoles,
} from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(maybeAuthenticatedUser).get(getAiRecommendation);
handler
  .use(isAuthenticatedUser, authorizeRoles("admin"))
  .delete(deleteAiRecommendation);

export default handler;
