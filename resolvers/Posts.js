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
            // console.log(data);
            const result = await Post.getPostById(data.insertedId);
            return result;
        },
        createComment: async (_, args) => {
            const { _id, content } = args;
            const comment = await Post.postComment(_id, content);
            // console.log(comment, "res comment");
            const result = await Post.getPostById(_id);
            console.log(result.comments);
            return result;
        },

        createLike: async (_, args) => {
            const { _id, content } = args;
        },
    },
};

module.exports = resolvers;
