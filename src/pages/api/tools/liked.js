import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { getMyLikedTools } from "@/backend/controllers/toolsController";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser).get(getMyLikedTools);

export default handler;
