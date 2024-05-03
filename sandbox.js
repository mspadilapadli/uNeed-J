// Ping Connection MongoDB

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
    "mongodb+srv://mspadilapadlidev:zoPeMOS5XZkgn9ZE@cluster0.nhsjhxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const uri = process.env.MONGODB_URI;
// console.log(process.env.MONGODB_URI, 'URL"');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("uNeed-J").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
