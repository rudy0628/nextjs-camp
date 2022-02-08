import { MongoClient, ObjectId } from 'mongodb';

const handler = async (req, res) => {
	const data = req.body;
	const client = await MongoClient.connect(
		'mongodb+srv://rudy:lastcool0628@cluster0.0ro8b.mongodb.net/camps?retryWrites=true&w=majority'
	);
	const db = client.db();
	const campsCollection = db.collection('camps');

	if (req.method === 'POST') {
		const result = await campsCollection.insertOne(data);

		client.close();

		res.status(201).json({ message: 'Add New Camp Successfully!' });
	}

	if (req.method === 'DELETE') {
		const result = await campsCollection.deleteOne({ _id: ObjectId(data) });

		client.close();

		res.status(201).json({ message: 'Delete New Camp Successfully!' });
	}
};

export default handler;
