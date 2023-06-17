import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { updateCategory, deleteCategory, getCategory } from "@/backend/controllers/categoriesController";
import { isAuthenticatedUser, authorizeRoles } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(updateCategory);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteCategory);
handler.get(getCategory);

export default handler;
