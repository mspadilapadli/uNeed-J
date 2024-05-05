const { ObjectId } = require("mongodb");
const { database } = require("../config/mongodb");
const { hashPassword } = require("../helpers/bcrypt");
const { GraphQLError } = require("graphql");

class User {
    static collection() {
        return database.collection("User");
    }

    static async getUsers() {
        return this.collection()
            .find({}, { projection: { password: 0 } })
            .toArray();
    }

    static async findUserById(_id) {
        return await this.collection().findOne(
            {
                _id: new ObjectId(String(_id)),
            },
            { projection: { password: 0 } }
        );
        // return this.collection().findOne({ _id: new ObjectId(`${_id}`) });
    }

    static async searchUsername(username) {
        return this.collection()
            .aggregate([
                {
                    $match: {
                        username: { $regex: username, $options: "i" },
                        // username: { $regex: new RegExp(username, "i") },
                    },
                },
                {
                    $project: {
                        password: 0,
                    },
                },
            ])
            .toArray();
    }

    static async addUser({ name, username, email, password }) {
        const newUsername = await this.collection().findOne({
            username,
        });

        if (newUsername) {
            throw new GraphQLError("username must be uniqe ", {
                extensions: {
                    code: "Bad Request",
                },
            });
        }
        if (username.length < 1) {
            throw new GraphQLError("username is required ", {
                extensions: {
                    code: "Bad Request",
                },
            });
        }

        const newEmail = await this.collection().findOne({
            email,
        });

        if (newEmail) {
            throw new GraphQLError("email must be uniqe ", {
                extensions: {
                    code: "Bad Request",
                },
            });
        }
        if (email.length < 1) {
            throw new GraphQLError("email is required ", {
                extensions: {
                    code: "Bad Request",
                },
            });
        }

        if (password.length < 5) {
            throw new GraphQLError("password must be more than 5 characters ", {
                extensions: {
                    code: "Bad Request",
                },
            });
        }

        return this.collection().insertOne({
            name,
            username,
            email,
            password: hashPassword(password),
        });
    }

    static async findUserByEmail(email) {
        return await this.collection().findOne({
            email,
        });
        // return this.collection().findOne({ _id: new ObjectId(`${_id}`) });
    }
}
module.exports = User;
