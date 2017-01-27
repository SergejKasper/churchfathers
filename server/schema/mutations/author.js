var graphql = require('graphql');
var types = require('../Types');
var resolvers = require('../Resolvers');

module.exports = {};

module.exports.author_create = {
  type: types.author,
  description: 'add new category',
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
  resolve: (_, args) => resolvers.Author.create(args),
}

module.exports.author_update = {
  type: types.author,
  description: 'update category',
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
  resolve: (_, args) => resolvers.Author.update(args),
};
module.exports.author_remove = {
  type: types.author,
  description: 'remove category',
  args: {
    _id: {
      type: graphql.GraphQLString
    },
  },
  resolve: (_, args) => resolvers.Author.remove(args),
};
