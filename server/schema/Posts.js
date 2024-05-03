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
   author: Author
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

type Author {
   _id: ID
   name: String
   username: String
   email: String
   

}

input InputDataPost {
   content: String
   tags: [String]
   imgUrl: String 
}


type Mutation {
   createPost(newPost: InputDataPost):Post
   createComment(_id: ID!, content: String): Post
   createLike(_id: ID!): Post
}

`;

module.exports = typeDefs;
