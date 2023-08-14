import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { createReview } from "@/backend/controllers/reviewsController";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser).post(createReview);

export default handler;
