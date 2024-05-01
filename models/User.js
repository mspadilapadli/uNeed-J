const { ObjectId } = require("mongodb");
const { database } = require("../config/mongodb");

class User {
    static collection() {
        return database.collection("User");
    }

    static async findUserById(_id) {
        return this.collection().findOne({ _id: new ObjectId(String(_id)) });
        // return this.collection().findOne({ _id: new ObjectId(`${_id}`) });
    }
}
module.exports = User;
