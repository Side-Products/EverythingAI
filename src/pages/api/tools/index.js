import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { createTool, allTools } from "@/backend/controllers/toolsController";
import { isAuthenticatedUser, maybeAuthenticatedUser } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(maybeAuthenticatedUser).get(allTools);
handler.use(isAuthenticatedUser).post(createTool);

export default handler;
