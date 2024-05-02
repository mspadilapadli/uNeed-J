const { GraphQLError } = require("graphql");
const User = require("../models/User");
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");

const resolvers = {
    Query: {
        getUsers: async () => {
            return await User.getUsers();
        },

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
        login: async (_, args) => {
            const { email, password } = args;
            if (!email || !password) {
                throw new GraphQLError("Invalid Input ", {
                    extensions: {
                        code: "Bad Request",
                    },
                });
            }

            const user = await User.findUserByEmail(email);
            if (!user) {
                throw new GraphQLError("Invalid Email ", {
                    extensions: {
                        code: "UNAUTHORIZED",
                    },
                });
            }

            const comparePass = comparePassword(password, user.password);
            if (!comparePass) {
                throw new GraphQLError("Invalid email or password ", {
                    extensions: {
                        code: "UNAUTHORIZED",
                    },
                });
            }

            const access_token = createToken({
                _id: user._id,
                email: user.email,
            });
            console.log(access_token, "accesstoken");

            return { access_token };
        },
    },
};

module.exports = resolvers;
