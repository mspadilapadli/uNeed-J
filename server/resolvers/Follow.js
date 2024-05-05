const Follow = require("../models/Follow");

const resolvers = {
    Query: {
        getFollowing: async (_, args, contextValue) => {
            const auth = contextValue.authentication();
            const { _id } = args;
            const data = await Follow.getFollowing(_id);
            return data;
        },
        getFollower: async (_, args, contextValue) => {
            const auth = contextValue.authentication();
            const { _id } = args;
            const data = await Follow.getFollower(_id);
            return data;
        },
    },
    Mutation: {
        addFollowing: async (_, args, contextValue) => {
            const auth = contextValue.authentication();

            // const isFollow = await Follow.addFollow(args, auth);

            // return isFollow;

            // // =====

            const { _id } = args;

            const data = await Follow.addFollow({
                followerId: auth._id,
                followingId: _id,
            });

            const result = await Follow.getFollowing(auth._id);

            return result;
        },
    },
};
module.exports = resolvers;
