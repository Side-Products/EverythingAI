const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

const uri = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true });

const newReviews = {
	productHunt: {
		stars: 4.8,
		link: "https://www.producthunt.com/products/chatgpt-1",
	},
	G2: {
		stars: 4.8,
		link: "https://www.g2.com/products/chatgpt-1",
	},
};

client.connect((err) => {
	const collection = client.db("everythingai").collection("tools");

	collection.updateOne(
		{ _id: ObjectId("64b68aeb8918ac16a6af90c9") }, // Replace with the actual _id of your document
		{ $set: { reviews: newReviews } },
		(err, result) => {
			if (err) {
				console.error(err);
			} else {
				console.log(`Modified ${result.modifiedCount} document(s)`);
			}
			client.close();
		}
	);
});
