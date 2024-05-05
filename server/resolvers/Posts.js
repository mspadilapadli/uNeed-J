const Post = require("../models/Posts");

const resolvers = {
    Query: {
        getPosts: async (_, args, contextValue) => {
            const auth = contextValue.authentication();
            return Post.getPosts();
        },
        getPostById: async (_, args, contextValue) => {
            const auth = contextValue.authentication();
            const { _id } = args;
            const data = await Post.getPostById(_id);
            return data;
        },
    },
    Mutation: {
        createPost: async (_, args, contextValue) => {
            const auth = contextValue.authentication();

            const { content, tags, imgUrl } = args.newPost;

            const data = await Post.addPost({
                content,
                tags,
                imgUrl,
                authorId: auth._id,
            });

            const result = await Post.getPostById(data.insertedId);
            return result;
        },
        createComment: async (_, args, contextValue) => {
            const auth = contextValue.authentication();

            const { _id, content } = args;

            await Post.postComment(_id, content, auth.username);

            const result = await Post.getPostById(_id);
            return result;
        },

        createLike: async (_, args, contextValue) => {
            const auth = contextValue.authentication();
            const { _id } = args;
            await Post.postLike(_id, auth.username);
            const result = await Post.getPostById(_id);
            return result;
        },
    },
};

module.exports = resolvers;
