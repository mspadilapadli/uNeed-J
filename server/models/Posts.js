const { ObjectId } = require("mongodb");
const { database } = require("../config/mongodb");
const redis = require("../config/redis");
const { GraphQLError } = require("graphql");

class Post {
    static collection() {
        return database.collection("Posts");
    }

    static async getPosts() {
        let posts = await redis.get("posts");

        if (posts) {
            return JSON.parse(posts);
        } else {
            posts = await this.collection()
                .aggregate([
                    {
                        $sort: {
                            createdAt: -1,
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
                    {
                        $project: {
                            "author.password": 0,
                        },
                    },
                ])
                .toArray();
            await redis.set("posts", JSON.stringify(posts));
        }
        return posts;
    }
    static async getPostById(_id) {
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
                {
                    $project: {
                        "author.password": 0,
                    },
                },
            ])
            .toArray();

        return data[0];
    }
    static async addPost(newPost) {
        if (!newPost.content || newPost.content.length < 1) {
            throw new GraphQLError("content is required ", {
                extensions: {
                    code: "Bad Request",
                },
            });
        }
        let date = new Date();
        const data = await this.collection().insertOne({
            ...newPost,
            authorId: new ObjectId(newPost.authorId),
            comments: [],
            likes: [],
            createdAt: date,
            updatedAt: date,
        });
        await redis.del("posts");
        return data;
    }

    static async postComment(_id, content, username) {
        let date = new Date();
        let comment = await this.collection().updateOne(
            { _id: new ObjectId(String(_id)) },
            {
                $push: {
                    comments: {
                        content: content,
                        username,
                        createdAt: date,
                        updatedAt: date,
                    },
                },
            }
        );
        await redis.del("posts");
        return comment;
    }

    static async postLike(_id, username) {
        let date = new Date();
        const like = await this.collection().updateOne(
            { _id: new ObjectId(String(_id)) },
            {
                $push: {
                    likes: {
                        username,
                        createdAt: date,
                        updatedAt: date,
                    },
                },
            }
        );
        await redis.del("posts");
        return like;
    }
}

module.exports = Post;
