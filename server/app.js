if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
// require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const {
    constraintDirective,
    constraintDirectiveTypeDefs,
} = require("graphql-constraint-directive");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const postTypeDefs = require("./schema/Posts");
const userTypeDefs = require("./schema/User");
const followTypeDefs = require("./schema/Follow");

const postResolver = require("./resolvers/Posts");
const userResolver = require("./resolvers/User");
const followResolver = require("./resolvers/Follow");

const { verifyToken } = require("./helpers/jwt");
const { GraphQLError } = require("graphql");

let schema = makeExecutableSchema({
    typeDefs: [
        constraintDirectiveTypeDefs,
        postTypeDefs,
        userTypeDefs,
        followTypeDefs,
    ],
    resolvers: [postResolver, userResolver, followResolver],
});
schema = constraintDirective()(schema);

const server = new ApolloServer({
    schema,
    // typeDefs: [postTypeDefs, userTypeDefs, followTypeDefs],
    // resolvers: [postResolver, userResolver, followResolver],
    introspection: true,
});

startStandaloneServer(server, {
    listen: { port: process.env.PORT || 3000 },
    context: async ({ req }) => {
        return {
            authentication: () => {
                // pengecekan token
                const authHeaders = req.headers.authorization;
                if (!authHeaders) {
                    throw new GraphQLError("Access Token is required", {
                        extensions: {
                            code: "NOT_AUTHORIZED",
                        },
                    });
                }

                const getToken = authHeaders.split(" ")[1];
                if (!getToken) {
                    throw new GraphQLError("Access Token is required", {
                        extensions: {
                            code: "NOT_AUTHORIZED",
                        },
                    });
                }
                const payload = verifyToken(getToken);
                if (!payload) {
                    throw new GraphQLError("Invalid Access Token", {
                        extensions: {
                            code: "NOT_AUTHORIZED",
                        },
                    });
                }

                return payload;
            },
        };
    },
})
    .then(({ url }) => {
        console.log(`🚀  Server ready at: ${url}`);
    })
    .catch((err) => console.log(err));
