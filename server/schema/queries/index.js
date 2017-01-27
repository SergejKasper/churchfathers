var graphql = require('graphql');

var author = require('./author');
var work = require('./work');

module.exports = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => (Object.assign(require('./author'),require('./work')))
});
