const User = require("../models/User");

const resolvers = {
    Query: {
        getUserById: async (_, args) => {
            const { _id } = args;
            const data = User.findUserById(_id);
            console.log(data);
            return data;
        },
    },
    Mutation: {
        // register: async () => {},
        // login: async () => {},
    },
};

module.exports = resolvers;
