import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { createSubCategory, allSubCategories } from "@/backend/controllers/subCategoriesController";
import { isAuthenticatedUser, authorizeRoles } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.get(allSubCategories);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(createSubCategory);

export default handler;
