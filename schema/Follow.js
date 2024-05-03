const typeDefs = `#graphql

type Follow {
   _id: ID
   followingId: String
   followerId: String
   createdAt: String
   updatedAt: String

type Query {
getFollower:Follow
}

type Mutation {
   
}

`;

module.exports = typeDefs;
