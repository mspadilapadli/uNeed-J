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
            // console.log(auth, "authresolver");
            // console.log(auth._id, "_id resolver");
            const { content, tags, imgUrl } = args.newPost;

            const data = await Post.addPost({
                content,
                tags,
                imgUrl,
                authorId: auth._id,
            });
            // console.log(data);
            const result = await Post.getPostById(data.insertedId);
            return result;
        },
        createComment: async (_, args, contextValue) => {
            const auth = contextValue.authentication();
            // console.log(auth.username, "username in resolvers");
            const { _id, content } = args;

            await Post.postComment(_id, content, auth.username);
            // console.log(comment, "res comment");
            const result = await Post.getPostById(_id);
            // console.log(result.comments);
            return result;
        },

        createLike: async (_, args, contextValue) => {
            const auth = contextValue.authentication();
            const { _id } = args;
            await Post.postLike(_id, auth.username);
            const result = await Post.getPostById(_id);
            // console.log(result.likes);
            return result;
        },
    },
};

module.exports = resolvers;
