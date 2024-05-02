const { ObjectId } = require("mongodb");
const { database } = require("../config/mongodb");
const { hashPassword } = require("../helpers/bcrypt");

class User {
    static collection() {
        return database.collection("User");
    }

    static async getUsers() {
        return this.collection().find().toArray();
    }

    static async findUserById(_id) {
        return await this.collection().findOne({
            _id: new ObjectId(String(_id)),
        });
        // return this.collection().findOne({ _id: new ObjectId(`${_id}`) });
    }

    static async addUser({ name, username, email, password }) {
        // console.log(newUser, "newUser model");

        return this.collection().insertOne({
            name,
            username,
            email,
            password: hashPassword(password),
        });
    }

    static async findUserByEmail(email) {
        return await this.collection().findOne({
            email: email,
        });
        // return this.collection().findOne({ _id: new ObjectId(`${_id}`) });
    }
}
module.exports = User;
