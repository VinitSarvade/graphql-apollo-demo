const express = require('express'),
  cors = require('cors'),
  helmet = require('helmet'),
  morgan = require('morgan'),
  path = require('path');

const { ApolloServer } = require('apollo-server-express'),
  schema = require('./schema');

const { port } = require('./constants');

const app = express();

app.use([cors(), helmet(), morgan('combined')]);

app.use(express.static(path.join(__dirname, '../../build/')));
app.get('*', (req, res) => res.redirect(301, '/'));

const server = new ApolloServer(schema);

server.applyMiddleware({ app });

app.listen({ port }, () => console.log(`Server running @ ${server.graphqlPath}`));
