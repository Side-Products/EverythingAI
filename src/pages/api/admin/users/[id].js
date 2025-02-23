import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import {
  getAdminUserDetails,
  updateAdminUserDetails,
  deleteAdminUser,
} from "@/backend/controllers/authController";
import {
  isAuthenticatedUser,
  authorizeRoles,
} from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler
  .use(isAuthenticatedUser, authorizeRoles("admin"))
  .get(getAdminUserDetails);
handler
  .use(isAuthenticatedUser, authorizeRoles("admin"))
  .put(updateAdminUserDetails);
handler
  .use(isAuthenticatedUser, authorizeRoles("admin"))
  .delete(deleteAdminUser);

export default handler;
