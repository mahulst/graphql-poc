import { Resolvers } from './generated/graphql';
import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import * as fs from 'fs';
import * as path from 'path';
import gql from 'graphql-tag';

const resolvers: Resolvers = {
    Query: {
        user: (parent, args, context) => {
            return { name: 'john', email: 'hello', friends: 1 }
        },
        users: async (a, b, c) => {
            return [{ email: 'hell@email.nl', name: 'john', friends: 1 }]
        }
    }
}

const schema = [fs.readFileSync(path.join(__dirname, "./schema.graphql"), "utf8")];
const typeDefs = gql(schema.join());

const server = new ApolloServer({
    schema: buildFederatedSchema([{
        typeDefs,
        resolvers
    }])
})


const PORT = process.env.PORT || 3002;

server.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`);
})
