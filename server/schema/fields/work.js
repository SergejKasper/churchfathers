var graphql = require('graphql');
var author = require('../Types/author');

const work = {
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
};

module.exports = work;
