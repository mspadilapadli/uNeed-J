const User = require("../models/User");

const resolvers = {
    Query: {
        getUserById: async (_, args) => {
            const { _id } = args;
            return await User.findUserById(_id);
        },
    },
    Mutation: {
        addUser: async (_, args) => {
            const { name, username, email, password } = args.newUser;
            const data = await User.addUser({
                name,
                username,
                email,
                password,
            });
            const option = {
                projection: { password: 0 },
            };
            const result = await User.findUserById(data.insertedId, option);
            console.log(result);
            return result;
        },
        // login: async () => {},
    },
};

module.exports = resolvers;
