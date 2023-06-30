import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { getCollectionBySlug } from "@/backend/controllers/collectionsController";
import { maybeAuthenticatedUser } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(maybeAuthenticatedUser).get(getCollectionBySlug);

export default handler;
