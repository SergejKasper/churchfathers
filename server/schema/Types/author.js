var graphql = require('graphql');

const author = new graphql.GraphQLObjectType({
  name: 'author',
  description: 'Author schema',
  fields: {
    _id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    createdAt: { type: graphql.GraphQLString },
    updatedAt: { type: graphql.GraphQLString },
  },
});

module.exports = author;
