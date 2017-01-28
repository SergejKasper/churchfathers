var graphql = require('graphql');

const author = new graphql.GraphQLObjectType({
  name: 'author',
  description: 'Author schema',
  fields: {
    _id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    birthDate: { type: graphql.GraphQLString },
    deathDate: { type: graphql.GraphQLString },
  },
});

module.exports = author;
