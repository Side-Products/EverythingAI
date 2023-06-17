import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { createCategory, allCategories } from "@/backend/controllers/categoriesController";
import { isAuthenticatedUser, authorizeRoles } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(createCategory);
handler.get(allCategories);

export default handler;
