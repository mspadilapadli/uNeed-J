const { ObjectId } = require("mongodb");
const { database } = require("../config/mongodb");

class Follow {
    static collection() {
        return database.collection("Follow");
    }
    static async getFollowing(_id) {
        //   return await this.collection().findOne({
        //       _id: new ObjectId(String(_id)),
        //   });

        const data = await this.collection()
            .aggregate([
                {
                    $match: {
                        followerId: new ObjectId(_id),
                    },
                },
                {
                    $lookup: {
                        from: "User",
                        localField: "followingId",
                        foreignField: "_id",
                        as: "following",
                    },
                },
                {
                    $unwind: {
                        path: "$following",
                        preserveNullAndEmptyArrays: false,
                    },
                },
                {
                    $project: {
                        "following.password": 0,
                    },
                },
            ])
            .toArray();
        return data;
    }

    static async getFollower(_id) {
        const data = await this.collection()
            .aggregate([
                {
                    $match: {
                        followingId: new ObjectId(_id),
                    },
                },
                {
                    $lookup: {
                        from: "User",
                        localField: "followerId",
                        foreignField: "_id",
                        as: "follower",
                    },
                },
                {
                    $unwind: {
                        path: "$follower",
                        preserveNullAndEmptyArrays: false,
                    },
                },
                {
                    $project: {
                        "follower.password": 0,
                    },
                },
            ])
            .toArray();
        return data;
    }
    static async addFollow(newPost) {
        // console.log(newPost.authorId, "newPost authorId model");
        let date = new Date();
        return this.collection().insertOne({
            ...newPost,
            followingId: new ObjectId(newPost.followingId),
            followerId: new ObjectId(newPost.followerId),
            createdAt: date,
            updatedAt: date,
        });
    }
}

module.exports = Follow;
