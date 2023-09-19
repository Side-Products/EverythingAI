import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { adminGetAllTools } from "@/backend/controllers/toolsController";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(adminGetAllTools);

export default handler;
