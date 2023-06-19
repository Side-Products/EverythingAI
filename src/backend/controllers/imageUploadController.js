import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";
import { uploadImageToAWS_S3 } from "@/backend/modules/image";

// upload image => /api/upload-image
const uploadImage = catchAsyncErrors(async (req, res, next) => {
	try {
		await uploadImageToAWS_S3(req, res);
	} catch (error) {
		return next(new ErrorHandler(error.message, 500));
	}
});

export { uploadImage };
