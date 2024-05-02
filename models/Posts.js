const { ObjectId } = require("mongodb");
const { database } = require("../config/mongodb");

class Post {
    static collection() {
        return database.collection("Posts");
    }

    static async getPosts() {
        return this.collection().find().toArray();
    }
    static async getPostById(_id) {
        return this.collection().findOne({ _id: new ObjectId(String(_id)) });
        // return this.collection().findOne({ _id: new ObjectId(`${_id}`) });
    }
    static async addPost(newPost) {
        // console.log(newPost, "newPost model");
        let date = new Date();
        return this.collection().insertOne({
            ...newPost,
            authorId: "dummy",
            comments: [],
            likes: [],
            createdAt: date,
            updatedAt: date,
        });
    }
}

module.exports = Post;
