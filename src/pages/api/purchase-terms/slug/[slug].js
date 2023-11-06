import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";

import onError from "@/backend/middlewares/errors";
import { getPurchaseTermsByToolSlug } from "@/backend/controllers/purchaseTermsController";

const handler = nc({ onError });

dbConnect();

handler.get(getPurchaseTermsByToolSlug);

export default handler;
