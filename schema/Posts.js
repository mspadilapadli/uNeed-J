const typeDefs = `#graphql

type Post {
   _id: ID
   content: String
   tags: [String]
   imgUrl: String 
   authorId: String 
   comments: [Comments]
   likes: [Likes]
   createdAt: String
   updatedAt: String
}

type Comments {
   content: String
   username: String
   createdAt: String
   updatedAt: String
}

type Likes {
   username: String
   createdAt: String
   updatedAt: String
}

type Query {
   getPosts:[Post]
   getPostById(_id:ID!): Post
}

input InputDataPost {
   content: String
   tags: [String]
   imgUrl: String 
   

}

type Mutation {
   createPost(newPost: InputDataPost):Post
}

`;

module.exports = typeDefs;
