const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const uri =
//     "mongodb+srv://mspadilapadlidev:zoPeMOS5XZkgn9ZE@cluster0.nhsjhxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = process.env.MONGODB_URI;

// Create a new client and connect to MongoDB
const client = new MongoClient(uri);
const database = client.db("uNeed-J");

module.exports = { client, database };
