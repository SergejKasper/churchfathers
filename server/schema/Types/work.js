var graphql = require('graphql');
var author = require('./author');

/* var graphql = require('graphql');
const work = new graphql.GraphQLObjectType({
  name: 'work',
  description: 'Work schema',
  fields: fields,
});
module.exports = work;
*/

const work = new graphql.GraphQLObjectType({
  name: 'work',
  description: 'Work schema',
  fields: {
    _id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    authors: { type: new graphql.GraphQLList(author) },
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
