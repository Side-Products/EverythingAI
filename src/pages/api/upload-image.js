import nc from "next-connect";
import dbConnect from "@/lib/dbConnect";
import { uploadImage } from "@/backend/controllers/imageUploadController";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";
import onError from "@/backend/middlewares/errors";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc({ onError });
dbConnect();

handler.use(isAuthenticatedUser).post(uploadImage);

export default handler;
