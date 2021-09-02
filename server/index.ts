import express from 'express';
import 'dotenv/config';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';
import { ApolloServer } from 'apollo-server-express';
import db from './knex/knex.js';

const app = express();
const port = process.env.EXPRESS_PORT || 3000;
const server = new ApolloServer({ typeDefs, resolvers });


async function setupServer() {
  console.log('Running Migrations');
  await db.migrate.latest();
  await server.start()
  server.applyMiddleware({ app })
}


console.log('setting up');
setupServer();

app.listen(port, () => {
  console.log('App listening at port: ', port);
});
