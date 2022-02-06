import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
	const client = await MongoClient.connect(
		'mongodb+srv://rudy:lastcool0628@cluster0.0ro8b.mongodb.net/camps?retryWrites=true&w=majority'
	);
	const db = client.db();
	const campsCollection = db.collection('camps');

	if (req.method === 'GET') {
		const result = await campsCollection.find().toArray();
		client.close();
		res
			.status(201)
			.json({ camps: result, message: 'Search All Camps Successfully!' });
	}
};

export default handler;
