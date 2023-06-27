import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { getToolBySlug } from "@/backend/controllers/toolsController";
import { maybeAuthenticatedUser } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(maybeAuthenticatedUser).get(getToolBySlug);

export default handler;
