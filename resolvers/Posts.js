const Post = require("../models/Posts");

const resolvers = {
    Query: {
        getPosts: async () => {
            return Post.getPosts();
        },
        getPostById: async (_, args) => {
            const { _id } = args;
            return Post.getPostById(_id);
        },
    },
    Mutation: {
        createPost: async () => {},
    },
};

module.exports = resolvers;
