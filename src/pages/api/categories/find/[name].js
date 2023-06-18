import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { getCategoryByName } from "@/backend/controllers/categoriesController";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.get(getCategoryByName);

export default handler;
