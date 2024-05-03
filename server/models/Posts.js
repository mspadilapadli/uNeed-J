const { ObjectId } = require("mongodb");
const { database } = require("../config/mongodb");

class Post {
    static collection() {
        return database.collection("Posts");
    }

    static async getPosts() {
        return this.collection()
            .aggregate([
                {
                    $lookup: {
                        from: "User",
                        localField: "authorId",
                        foreignField: "_id",
                        as: "author",
                    },
                },
                {
                    $unwind: {
                        path: "$author",
                        preserveNullAndEmptyArrays: false,
                    },
                },
            ])
            .toArray();
    }
    static async getPostById(_id) {
        console.log(_id, "id post model");

        // return this.collection().findOne({ _id: new ObjectId(String(_id)) });
        // return this.collection().findOne({ _id: new ObjectId(`${_id}`) });
        const data = await this.collection()
            .aggregate([
                {
                    $match: {
                        _id: new ObjectId(_id),
                    },
                },
                {
                    $lookup: {
                        from: "User",
                        localField: "authorId",
                        foreignField: "_id",
                        as: "author",
                    },
                },
                {
                    $unwind: {
                        path: "$author",
                        preserveNullAndEmptyArrays: false,
                    },
                },
            ])
            .toArray();

        return data[0];
    }
    static async addPost(newPost) {
        // console.log(newPost.authorId, "newPost authorId model");
        let date = new Date();
        return this.collection().insertOne({
            ...newPost,
            authorId: new ObjectId(newPost.authorId),
            comments: [],
            likes: [],
            createdAt: date,
            updatedAt: date,
        });
    }

    static async postComment(_id, content) {
        // console.log(newPost, "newPost model");
        let date = new Date();
        return this.collection().updateOne(
            { _id: new ObjectId(String(_id)) },
            {
                $push: {
                    comments: {
                        content: content,
                        username: "dummy dulu",
                        createdAt: date,
                        updatedAt: date,
                    },
                },
            }
        );
    }

    static async postLike(_id, content) {
        // console.log(newPost, "newPost model");
        let date = new Date();
        return this.collection().updateOne(
            { _id: new ObjectId(String(_id)) },
            {
                $push: {
                    likes: {
                        username: "dummy dulu",
                        createdAt: date,
                        updatedAt: date,
                    },
                },
            }
        );
    }
}

module.exports = Post;
