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
        createPost: async (_, args) => {
            const { content, tags, imgUrl } = args.newPost;

            const data = await Post.addPost({ content, tags, imgUrl });
            console.log(data);
            const result = await Post.getPostById(data.insertedId);
            return result;
        },
    },
};

module.exports = resolvers;
