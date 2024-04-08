import Collection from "@/backend/models/collection";
import ErrorHandler from "@/backend/utils/errorHandler";
import catchAsyncErrors from "@/backend/middlewares/catchAsyncErrors";
import Tool from "@/backend/models/tool";
import CollectionToolRelation from "@/backend/models/collectionToolRelation";
import { maybeAddLikedTools } from "@/backend/controllers/toolsController";
import { generateSlug } from "@/utils/Helpers";

// add to db => /api/collections
const createCollection = catchAsyncErrors(async (req, res) => {
	// save to db
	const { name, description, image, metaDescription } = req.body;
	const collection = await Collection.create({
		name,
		slug: generateSlug(name),
		description,
		image,
		metaDescription,
	});

	res.status(200).json({
		success: true,
		collection,
	});
});

// get all collections => /api/collections
const allCollections = catchAsyncErrors(async (req, res) => {
	const collections = await Collection.find().sort({ createdAt: -1, name: 1 });
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

// get collection => /api/collections/find/:slug
const getCollectionBySlug = catchAsyncErrors(async (req, res, next) => {
	const { slug } = req.query;
	const collection = await Collection.findOne({ slug });
	if (!collection) {
		return next(new ErrorHandler("No collection found with this slug", 404));
	}
	const collectionId = collection._id;

	const tools = await CollectionToolRelation.aggregate([
		{ $match: { collectionId: collectionId } },
		{
			$lookup: {
				from: "tools",
				localField: "toolId",
				foreignField: "_id",
				as: "tools",
			},
		},
		{
			$unwind: "$tools",
		},
		{
			$replaceRoot: { newRoot: "$tools" },
		},
		{
			$lookup: {
				from: "likedtools",
				localField: "_id",
				foreignField: "tool",
				as: "likes",
			},
		},
		{
			$addFields: {
				likeCount: { $size: "$likes" },
			},
		},
		{
			$sort: { likeCount: -1, createdAt: -1 },
		},
		{
			$lookup: {
				from: "categories",
				localField: "category",
				foreignField: "_id",
				as: "category",
			},
		},
		{
			$lookup: {
				from: "subcategories",
				localField: "subCategory",
				foreignField: "_id",
				as: "subCategory",
			},
		},
		{
			$lookup: {
				from: "pricings",
				localField: "pricing",
				foreignField: "_id",
				as: "pricing",
			},
		},
		{
			$project: {
				name: 1,
				slug: 1,
				url: 1,
				utmLink: 1,
				image: 1,
				oneLiner: 1,
				category: { $arrayElemAt: ["$category", 0] },
				subCategory: { $arrayElemAt: ["$subCategory", 0] },
				pricing: { $arrayElemAt: ["$pricing", 0] },
				createdAt: 1,
				likeCount: 1,
				ad: 1,
			},
		},
	]);

	const toolsWithLike = await maybeAddLikedTools(req, tools);

	await Collection.findByIdAndUpdate(collection._id, {
		timesVisited: collection.timesVisited + 1,
	});

	res.status(200).json({
		success: true,
		collection: { ...collection._doc, tools: toolsWithLike },
	});
});

// add tool to collection => /api/collections/:id/add-tool
const addToolToCollection = catchAsyncErrors(async (req, res, next) => {
	const { id } = req.query;
	const { toolId } = req.body;

	const collection = await Collection.findById(id);
	if (!collection) {
		return next(new ErrorHandler("No collection found with this id", 404));
	}

	const tool = await Tool.findById(toolId);
	if (!tool) {
		return next(new ErrorHandler("No tool found with this id", 404));
	}

	const alreadyFound = await CollectionToolRelation.findOne({
		collectionId: id,
		toolId,
	});
	if (alreadyFound) {
		return next(new ErrorHandler("Tool already exists in this collection", 400));
	}

	const collectionToolRelation = await CollectionToolRelation.create({
		collectionId: id,
		toolId,
	});

	res.status(200).json({
		success: true,
		collectionToolRelation,
	});
});

// remove tool from collection => /api/collections/:id/remove-tool
const removeToolFromCollection = catchAsyncErrors(async (req, res, next) => {
	const { id } = req.query;
	const { toolId } = req.body;

	const collection = await Collection.findById(id);
	if (!collection) {
		return next(new ErrorHandler("No collection found with this id", 404));
	}

	const tool = await Tool.findById(toolId);
	if (!tool) {
		return next(new ErrorHandler("No tool found with this id", 404));
	}

	const toolExistsInCollection = await CollectionToolRelation.findOne({
		collectionId: id,
		toolId,
	});
	if (!toolExistsInCollection) {
		return next(new ErrorHandler("Tool does not exist in this collection", 400));
	}

	const collectionToolRelation = await CollectionToolRelation.findOneAndDelete({
		collectionId: id,
		toolId,
	});

	res.status(200).json({
		success: true,
		collectionToolRelation,
	});
});

export { createCollection, allCollections, updateCollection, deleteCollection, getCollectionBySlug, addToolToCollection, removeToolFromCollection };
