import Collection from "@/backend/models/collection";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";
import Tool from "@/backend/models/tool";
import { maybeAddLikedTools } from "@/backend/controllers/toolsController";
import { generateSlug } from "@/utils/Helpers";

// add to db => /api/collections
const createCollection = catchAsyncErrors(async (req, res) => {
	// save to db
	const { name, description } = req.body;
	const collection = await Collection.create({ name, slug: generateSlug(name), description });

	res.status(200).json({
		success: true,
		collection,
	});
});

// get all collections => /api/collections
const allCollections = catchAsyncErrors(async (req, res) => {
	const collections = await Collection.find().sort({ name: 1, createdAt: "desc" });
	const collectionsCount = await Collection.countDocuments();

	res.status(200).json({
		success: true,
		collections,
		collectionsCount,
	});
});

// update collection => /api/collections/:id
const updateCollection = catchAsyncErrors(async (req, res, next) => {
	let collection = await Collection.findById(req.query.id);
	if (!collection) {
		return next(new ErrorHandler("No collection found with this id", 404));
	}

	collection = await Collection.findByIdAndUpdate(req.query.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});
	res.status(200).json({ success: true, collection });
});

// delete collection => /api/collections/:id
const deleteCollection = catchAsyncErrors(async (req, res, next) => {
	const collection = await Collection.findById(req.query.id);
	if (!collection) {
		return next(new ErrorHandler("No collection found with this id", 404));
	}

	await collection.remove();
	res.status(200).json({ success: true, message: "Collection deleted successfully" });
});

// get collection => /api/collections/:slug
const getCollectionBySlug = catchAsyncErrors(async (req, res, next) => {
	const { slug } = req.query;
	const collection = await Collection.findOne({ slug });
	if (!collection) {
		return next(new ErrorHandler("No collection found with this slug", 404));
	}
	const collectionId = collection._id;

	// const tools = await Tool.aggregate([
	// 	{ $match: { collection: collectionId, verified: true } },
	// 	{
	// 		$lookup: {
	// 			from: "likedtools",
	// 			localField: "_id",
	// 			foreignField: "tool",
	// 			as: "likes",
	// 		},
	// 	},
	// 	{
	// 		$addFields: {
	// 			likeCount: { $size: "$likes" },
	// 		},
	// 	},
	// 	{
	// 		$sort: { likeCount: -1, createdAt: -1 },
	// 	},
	// 	{
	// 		$lookup: {
	// 			from: "collections",
	// 			localField: "collection",
	// 			foreignField: "_id",
	// 			as: "collection",
	// 		},
	// 	},
	// 	{
	// 		$lookup: {
	// 			from: "subcollections",
	// 			localField: "subCollection",
	// 			foreignField: "_id",
	// 			as: "subCollection",
	// 		},
	// 	},
	// 	{
	// 		$lookup: {
	// 			from: "pricings",
	// 			localField: "pricing",
	// 			foreignField: "_id",
	// 			as: "pricing",
	// 		},
	// 	},
	// 	{
	// 		$project: {
	// 			name: 1,
	// 			slug: 1,
	// 			url: 1,
	// 			image: 1,
	// 			oneLiner: 1,
	// 			collection: { $arrayElemAt: ["$collection", 0] },
	// 			subCollection: { $arrayElemAt: ["$subCollection", 0] },
	// 			pricing: { $arrayElemAt: ["$pricing", 0] },
	// 			createdAt: 1,
	// 			likeCount: 1,
	// 		},
	// 	},
	// ]);

	// const toolsWithLike = await maybeAddLikedTools(req, tools);

	// // Find all subcollections that have the same collectionId as the collection
	// const subcollections = await SubCollection.find({ collectionId });
	res.status(200).json({ success: true, collection });
});

export { createCollection, allCollections, updateCollection, deleteCollection, getCollectionBySlug };
