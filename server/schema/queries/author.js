var graphql = require('graphql');
var types = require('../Types');
var resolvers = require('../Resolvers');
var fields = require('../fields/author');

module.exports = {
  author_find: {
    type: new graphql.GraphQLList(types.author),
    args: {
      offset: {
        type: graphql.GraphQLInt
      },
      limit: {
        type: graphql.GraphQLInt
      },
      _id: {
        type: graphql.GraphQLString,
      },
    },
    resolve: (_, args) => resolvers.author.find(args),
  }
};
