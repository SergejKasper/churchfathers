var graphql = require('graphql');

var author_find = require('./author');
var work_find = require('./work');

module.exports = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    author_find,
    work_find
  })
});
