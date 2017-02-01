var graphql = require('graphql');
var types = require('../Types');
var resolvers = require('../Resolvers');
var fields = require('../fields/author');
var utils = require('../utils');

fields = utils.transformFieldsForMutation(fields);

module.exports = {}
module.exports.author_create = {
  type: types.author,
  description: 'add new author',
  args: Object.assign(fields),
  resolve: (_, args) => resolvers.author.create(args),
};
module.exports.author_update = {
  type: types.author,
  description: 'update author',
  args: Object.assign({
    _id: {
      type: graphql.GraphQLString
    }
  }, fields),
  resolve: (_, args) => {
    resolvers.author.update(args)
  }
};
module.exports.author_remove = {
  type: types.author,
  description: 'remove author',
  args: {
    _id: {
      type: graphql.GraphQLString
    },
  },
  resolve: (_, args) => resolvers.author.remove(args)
};
