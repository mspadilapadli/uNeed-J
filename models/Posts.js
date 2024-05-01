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
    // static async addPost(inputAdd) {
    //     // console.log(inputAdd, "newPost model");
    //     return this.collection().insertOne({
    //         ...inputAdd,
    //         authorId: "23123",
    //         comments: [],
    //         likes: [],
    //     });
    // }
}

module.exports = Post;
