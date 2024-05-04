const typeDefs = `#graphql

type Follow {
   _id: ID
   followingId: String
   followerId: String
   following: FollowDetail
   follower: FollowDetail
   createdAt: String
   updatedAt: String
}

type FollowDetail {
    _id: ID
    name: String
    username: String
    email: String
}




type Query {
getFollowing(_id:ID!):[Follow]
getFollower(_id:ID!):[Follow]
}

type Mutation {
addFollowing(_id:ID!):[Follow]
   
}

`;

module.exports = typeDefs;
