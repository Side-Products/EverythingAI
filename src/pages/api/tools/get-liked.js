import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { getLikedTools } from "@/backend/controllers/toolsController";
import { maybeAuthenticatedUser } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(maybeAuthenticatedUser).get(getLikedTools);

export default handler;
