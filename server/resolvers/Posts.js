const Post = require("../models/Posts");

const resolvers = {
    Query: {
        getPosts: async () => {
            return Post.getPosts();
        },
        getPostById: async (_, args) => {
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
        createComment: async (_, args) => {
            const { _id, content } = args;
            const comment = await Post.postComment(_id, content);
            // console.log(comment, "res comment");
            const result = await Post.getPostById(_id);
            console.log(result.comments);
            return result;
        },

        createLike: async (_, args) => {
            const { _id } = args;
            const like = await Post.postLike(_id);
            const result = await Post.getPostById(_id);
            console.log(result.likes);
            return result;
        },
    },
};

module.exports = resolvers;
