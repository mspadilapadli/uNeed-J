const typeDefs = `#graphql

type User {
   _id: ID
   name: String
   username: String
   email: String
   password: String
}

type UserCredential{
   access_token:String
}


type Query {
   getUsers:[User]
   getUserById(_id: ID!): User
}

input InputNewUser{
   name: String
   username: String
   email: String
   password: String
}

type Mutation {
   addUser(newUser : InputNewUser) : User
   login(email: String, password: String) : UserCredential
}

`;

module.exports = typeDefs;
