var graphql = require('graphql');
const category = new graphql.GraphQLObjectType({
  name: 'category',
  description: 'Sub-type for list of category',
  fields: {
    value: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
  },
});
module.exports = category;
