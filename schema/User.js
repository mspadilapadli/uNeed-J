const typeDefs = `#graphql

type User {
   _id: ID
   name: String
   username: String
   email: String
   password: String
}

type Query {
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
}

`;

module.exports = typeDefs;
