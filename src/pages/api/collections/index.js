import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import {
  createCollection,
  allCollections,
} from "@/backend/controllers/collectionsController";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.get(allCollections);
handler
  .use(isAuthenticatedUser, authorizeRoles("admin"))
  .post(createCollection);

export default handler;
