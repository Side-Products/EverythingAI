import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { getFeaturedTools } from "@/backend/controllers/toolsController";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.get(getFeaturedTools);

export default handler;
