import { Resolvers } from './generated/graphql';
import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import * as fs from 'fs';
import * as path from 'path';
import gql from 'graphql-tag';

const resolvers: Resolvers = {
    Query: {
        posts: async () => {

            return [{ name: 'mijn eerste post' }]
        }
    },
    Mutation: {
        SendMissiles: (_, { amount }) => {
            return `[${amount}] missiles have been sent`
        }
    },
    User: {
        posts: async () => {
            return [{ name: 'post voor user' }]
        }
    }
}

const schema = [fs.readFileSync(path.join(__dirname, "./schema.graphql"), "utf8")];
const typeDefs = gql(schema.join());

const server = new ApolloServer({
    schema: buildFederatedSchema([{
        typeDefs,
        resolvers,
    }])
})


const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`);
})
