// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
// }
require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const postTypeDefs = require("./schema/Posts");
const userTypeDefs = require("./schema/User");

const postResolver = require("./resolvers/Posts");
const userResolver = require("./resolvers/User");

const server = new ApolloServer({
    typeDefs: [postTypeDefs, userTypeDefs],
    resolvers: [postResolver, userResolver],
    introspection: true,
});

startStandaloneServer(server, {
    listen: { port: process.env.PORT || 3000 },
})
    .then(({ url }) => {
        console.log(`🚀  Server ready at: ${url}`);
    })
    .catch((err) => console.log(err));
