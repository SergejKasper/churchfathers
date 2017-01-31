var graphql = require('graphql');
var author = require('../Types/author');

const work = {
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
};

/* let info = {
  name: 'infoType_Author',
  fields: () => ({
    name: { type: graphql.GraphQLString }
    description: { type: graphql.GraphQLString }
  })
}};

i18.appLocals.forEach((lang)=> {
  author['data_' + lang] = { type: new graphql.GraphQLObjectType(info) }
}); */


module.exports = work;
