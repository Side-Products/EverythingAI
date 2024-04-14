import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { createLikedTool, deleteLikedTool } from "@/backend/controllers/likedToolsController";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser).post(createLikedTool);
handler.use(isAuthenticatedUser).delete(deleteLikedTool);

export default handler;
