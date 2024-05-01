const typeDefs = `#graphql

type User {
   _id: ID
   name: String
   username: String
   email: String
   password: String  
}

type Query {
   getUserById(_id:ID!) : User
}

type Mutation {

}

`;

module.exports = typeDefs;
