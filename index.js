const { ApolloServer } = require('apollo-server');
const schema = require('./schema');

const { port } = require('./constants');

const server = new ApolloServer(schema);

server.listen({ port })
  .then(({ url }) => console.log(`Server running @ ${url}`));
