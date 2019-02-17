const axios = require('axios');

const userTypeDef = `
  type User {
    id: ID!,
    first_name: String!,
    last_name: String,
    avatar: String
  }

  input UserInput {
    first_name: String!,
    last_name: String,
  }

  extend type Query {
    users: [User],
    user(id: ID!): User
  }

  extend type Mutation {
    addUser(input: UserInput!): User
  }
`;

const userResolvers = {
  Query: {
    users: (_, args, { dataSources: { usersApi } }) => usersApi.getAll(),
    user: (_, { id }, { dataSources: { usersApi } }) => usersApi.getUser(id),
  },
  Mutation: {
    addUser: (_, { input }, { dataSources: { usersApi } }) => usersApi.create(input)
  }
};

module.exports = {
  userTypeDef,
  userResolvers
};
