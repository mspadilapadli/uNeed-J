const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const server = new ApolloServer({
    typeDefs: [],
    resolvers: [],
    introspection: true,
});

startStandaloneServer(server, {
    listen: { port: process.env.PORT || 3000 },
})
    .then(({ url }) => {
        console.log(`🚀  Server ready at: ${url}`);
    })
    .catch((err) => console.log(err));
