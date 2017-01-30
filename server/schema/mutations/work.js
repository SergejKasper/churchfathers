var graphql = require('graphql');
var types = require('../Types');
var resolvers = require('../Resolvers');
var fields = require('../fields/author');
var utils = require('../utils');

delete fields._id;

module.exports = {}
module.exports.work_create = {
  type: types.work,
  description: 'add new work',
  args: utils.transformFieldsForMutation(fields, true, []),
  resolve: (_, args) => resolvers.work.create(args),
};
module.exports.work_update = {
  type: types.work,
  description: 'update work',
  args: utils.transformFieldsForMutation(fields, false, []),
  resolve: (_, args) => resolvers.work.update(args),
};
module.exports.work_remove = {
  type: types.work,
  description: 'remove category',
  args: {
    _id: {
      type: graphql.GraphQLString
    },
  },
  resolve: (_, args) => resolvers.work.remove(args),
};
