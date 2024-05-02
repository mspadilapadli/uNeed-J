const typeDefs = `#graphql

type Follow {
   _id: ID
   followingId: String
   followerId: String
   createdAt: String
   updatedAt: String

type Query {
}

type Mutation {
   
}

`;

module.exports = typeDefs;
