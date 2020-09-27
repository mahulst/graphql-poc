import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';

const gateway = new ApolloGateway({
    serviceList: [
        { name: "users", url: "http://localhost:3002/graphql" },
        { name: "posts", url: "http://localhost:3001/graphql" },
    ]
});

(async () => {
    const { schema, executor } = await gateway.load();

    const server = new ApolloServer({ schema, executor });

    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
})();
