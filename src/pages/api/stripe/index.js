import nc from "next-connect";
import { createCheckoutSession } from "@/backend/controllers/stripeController";
import {
  isAuthenticatedUser,
  maybeAuthenticatedUser,
} from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });

handler.use(maybeAuthenticatedUser).post(createCheckoutSession);

export default handler;
