const { ObjectId } = require("mongodb");
const { database } = require("../config/mongodb");
const { sign } = require("jsonwebtoken");

class Follow {
    static collection() {
        return database.collection("Follow");
    }
    static async getFollowing(_id) {
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
        let date = new Date();
        let isFollow = await this.collection().insertOne({
            ...newPost,
            followingId: new ObjectId(newPost.followingId),
            followerId: new ObjectId(newPost.followerId),
            createdAt: date,
            updatedAt: date,
        });

        return isFollow;
    }

    // static async addFollow(args, auth) {
    //     // console.log(newPost.authorId, "newPost authorId model");

    //     const followingId = args._id;
    //     console.log(followingId, "following iD model");
    //     const following = await this.getFollowing(auth._id);
    //     const isFollow = following.find((el) => {
    //         console.log(followingId + "===" + el.following._id);
    //         followingId === el.following._id;
    //     });

    //     console.log(isFollow, "isFollow found");

    //     if (isFollow) {
    //         await this.collection().deleteOne({
    //             _id: new ObjectId(isFollow._id),
    //         });
    //     } else {
    //         let date = new Date();
    //         await this.collection().insertOne({
    //             followingId: new ObjectId(followingId),
    //             followerId: new ObjectId(auth._id),
    //             createdAt: date,
    //             updatedAt: date,
    //         });
    //     }
    //     const result = await Follow.getFollowing(auth._id);

    //     return result;
    // }
}

module.exports = Follow;
