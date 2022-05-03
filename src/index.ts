import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import resolvers from './resolvers';

import ZipAPI from './datasources/zip-api';

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            zipAPI: new ZipAPI()
        };
    },
})

const port = 4000;

server.listen({port}).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});