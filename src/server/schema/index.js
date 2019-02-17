const _ = require('lodash');
const { userTypeDef, userResolvers } = require('./user.schema');

const UsersApi = require('../apis/users.api');

const rootTypeDefs = `
  type Query
  type Mutation
  schema {
    query: Query,
    mutation: Mutation
  }
`;

const schema = {
  typeDefs: [rootTypeDefs, userTypeDef],
  resolvers: [userResolvers],
  dataSources: () => ({
    usersApi: new UsersApi()
  })
};


module.exports = schema;
