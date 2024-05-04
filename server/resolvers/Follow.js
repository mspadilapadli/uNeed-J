const Follow = require("../models/Follow");

const resolvers = {
    Query: {
        getFollowing: async (_, args, contextValue) => {
            const auth = contextValue.authentication();
            const { _id } = args;
            const data = await Follow.getFollowing(_id);
            // console.log(data, "data  following by id");
            return data;
        },
        getFollower: async (_, args, contextValue) => {
            const auth = contextValue.authentication();
            const { _id } = args;
            const data = await Follow.getFollower(_id);
            // console.log(data, "data  following by id");
            return data;
        },
    },
    Mutation: {
        addFollowing: async (_, args, contextValue) => {
            const auth = contextValue.authentication();
            const { _id } = args;
            // console.log(auth._id, "follwerId");
            const data = await Follow.addFollow({
                followerId: auth._id,
                followingId: _id,
            });
            console.log(data, "data crate follow");
            const result = await Follow.getFollowing(auth._id);
            console.log(result, "data crate follow");
            return result;
            // return console.log("resolver follwoer");
        },
    },
};
module.exports = resolvers;
