import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { getLeaderboardTools } from "@/backend/controllers/toolsController";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.get(getLeaderboardTools);

export default handler;
