import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { allReviews } from "@/backend/controllers/reviewsController";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.post(allReviews);

export default handler;
