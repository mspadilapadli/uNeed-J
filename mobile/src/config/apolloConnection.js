import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
} from "@apollo/client";

const client = new ApolloClient({
    uri: "https://5c77-114-122-14-53.ngrok-free.app",
    cache: new InMemoryCache(),
});

export default client;
