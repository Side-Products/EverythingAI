import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { removeToolFromCollection } from "@/backend/controllers/collectionsController";
import { isAuthenticatedUser, authorizeRoles } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(removeToolFromCollection);

export default handler;
