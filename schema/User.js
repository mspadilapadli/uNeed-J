const typeDefs = `#graphql

type User {
   _id: ID
   name: String
   username: String
   email: String
   password: String  
}

type Query {
}

type Mutation {
   
}

`;

module.exports = typeDefs;
