import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { createPricing, allPricings } from "@/backend/controllers/pricingController";
import { isAuthenticatedUser, authorizeRoles } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(createPricing);
handler.get(allPricings);

export default handler;
