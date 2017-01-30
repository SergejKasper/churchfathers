var graphql = require('graphql');
var fields = require('../fields/author');

const author = new graphql.GraphQLObjectType({
  name: 'author',
  description: 'Author schema',
  fields: fields,
});
module.exports = author;
