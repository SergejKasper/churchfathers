var graphql = require('graphql');
var author = require('./author');

/* const ingredient = new GraphQLObjectType({
  name: 'ingredient',
  description: 'Sub-type for list of ingredient',
  fields: {
    value: { type: graphql.GraphQLString },
    label: { type: graphql.GraphQLString },
  },
}); */

const work = new graphql.GraphQLObjectType({
  name: 'work',
  description: 'Work schema',
  fields: {
    _id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    authors: { type: new graphql.GraphQLList(author) },
    /* ingredients: { type: new GraphQLList(ingredient) },*/
    language: { type: graphql.GraphQLString },
    shortDescription: { type: graphql.GraphQLString },
    pageTitle: { type: graphql.GraphQLString },
    metaDescription: { type: graphql.GraphQLString },
    metaKeywords: { type: graphql.GraphQLString },
    writingDate: {type: graphql.GraphQLString},
    image: { type: graphql.GraphQLString },
    isPublished: { type: graphql.GraphQLBoolean },
  },
});

module.exports = work;
