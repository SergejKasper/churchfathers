var graphql = require('graphql');

var queries = require('./queries');
var mutations = require('./mutations');

module.exports = new graphql.GraphQLSchema({
  query: queries,
  mutation: mutations,
});
