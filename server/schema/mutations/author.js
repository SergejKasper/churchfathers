var graphql = require('graphql');
var types = require('../Types');
var resolvers = require('../Resolvers');

module.exports = {};

module.exports.author_create = {
  type: types.author,
  description: 'add new author',
  args: {
    name: {
      type: graphql.GraphQLString
    },
    bornOn: {
      type: graphql.GraphQLString
    },
    diedAt: {
      type: graphql.GraphQLString
    }
  },
  resolve: (_, args) => resolvers.author.create(args),
}

module.exports.author_update = {
  type: types.author,
  description: 'update author',
  args: {
    _id: {
      type: graphql.GraphQLString
    },
    name: {
      type: graphql.GraphQLString
    },
    bornOn: {
      type: graphql.GraphQLString
    },
    diedAt: {
      type: graphql.GraphQLString
    }
  },
  resolve: (_, args) => resolvers.author.update(args),
};
module.exports.author_remove = {
  type: types.author,
  description: 'remove author',
  args: {
    _id: {
      type: graphql.GraphQLString
    },
  },
  resolve: (_, args) => resolvers.author.remove(args),
};
