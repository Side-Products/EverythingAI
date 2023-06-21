import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { updateSubCategory, deleteSubCategory, getSubCategory } from "@/backend/controllers/subCategoriesController";
import { isAuthenticatedUser, authorizeRoles } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.get(getSubCategory);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(updateSubCategory);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteSubCategory);

export default handler;
