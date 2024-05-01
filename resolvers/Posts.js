const Post = require("../models/Posts");

const resolvers = {
    Query: {
        getPosts: async () => {
            return Post.getPosts();
        },
        getPostById: async (_, args) => {},
    },
    Mutation: {
        createPost: async () => {},
    },
};

module.exports = resolvers;
