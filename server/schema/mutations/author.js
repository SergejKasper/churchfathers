var graphql = require('graphql');
var types = require('../Types');
var resolvers = require('../Resolvers');
var fields = require('../fields/author');
var utils = require('../utils');

/*Remove the id for the create schema*/
delete fields._id;

module.exports = {};
module.exports.author_create = {
  type: types.author,
  description: 'add new author',
  args: utils.transformFieldsForMutation(fields, false),
  resolve: (_, args) => resolvers.author.create(args),
};
module.exports.author_update = {
  type: types.author,
  description: 'update author',
  args: utils.transformFieldsForMutation(fields, true),
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
