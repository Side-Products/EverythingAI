import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { getCategoryByName } from "@/backend/controllers/categoriesController";
import { maybeAuthenticatedUser } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(maybeAuthenticatedUser).get(getCategoryByName);

export default handler;
