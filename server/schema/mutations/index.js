var graphql = require('graphql');
module.exports =  new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: () => (Object.assign(require('./author'),require('./work')))
});
