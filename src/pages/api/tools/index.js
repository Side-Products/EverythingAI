import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { createTool, allTools } from "@/backend/controllers/toolsController";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser).post(createTool);
handler.get(allTools);

export default handler;
