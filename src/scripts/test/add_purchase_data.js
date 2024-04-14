const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

// Connect to the database
const uri = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true });

// Create a new purchase object
const newPurchaseTerm = {
	termLength: "1 Year",
	couponCode: "BIGSALE2023",
	actualPrice: 200,
	discountedPrice: 150,
	termsAndConditions: "Terms and conditions for the purchase.",
	limit: 20,
};
const newPurchaseTerm2 = {
	termLength: "3 Months",
	couponCode: "BIGSALE2023",
	actualPrice: 200,
	discountedPrice: 150,
	termsAndConditions: "Terms and conditions for the purchase.",
	limit: 20,
};

const newPurchase = {
	terms: [newPurchaseTerm, newPurchaseTerm2],
	toolOwnerEmail: ["email1@example.com", "email2@example.com"],
	description: "This is a description for the purchase.",
};

client.connect(async (err) => {
	const purchaseCollection = client.db("everythingai").collection("purchaseTerm");
	// add new purchase
	await purchaseCollection.insertOne(newPurchase, (err, result) => {
		if (err) {
			console.error(err);
		} else {
			console.log(`Added ${result.insertedId} purchase document(s)`);
		}
		client.close();
	});
});
