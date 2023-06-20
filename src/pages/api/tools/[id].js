import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { updateTool, deleteTool, getTool } from "@/backend/controllers/toolsController";
import { isAuthenticatedUser, authorizeRoles } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.get(getTool);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(updateTool);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteTool);

export default handler;
