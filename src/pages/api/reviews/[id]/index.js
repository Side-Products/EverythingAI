import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import {
  updateReview,
  deleteReview,
} from "@/backend/controllers/reviewsController";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(updateReview);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteReview);

export default handler;
