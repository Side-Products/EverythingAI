import nc from "next-connect";
import {
  createCheckoutSession,
  getCheckoutSession,
} from "@/backend/controllers/stripeController";
import {
  isAuthenticatedUser,
  maybeAuthenticatedUser,
} from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });

handler.use(isAuthenticatedUser).post(createCheckoutSession);

handler.use(isAuthenticatedUser).get(getCheckoutSession);

export default handler;
