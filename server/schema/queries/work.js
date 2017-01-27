var graphql = require('graphql');
var types = require('../Types');
var resolvers = require('../Resolvers');

module.exports = {
  type: new graphql.GraphQLList(types.work),
  args: {
    offset: { type: graphql.GraphQLInt },
    limit: { type: graphql.GraphQLInt },
    _id: {
      type: graphql.GraphQLString,
    },
  },
  resolve: (_, args) => resolvers.Author.find(args),
}
