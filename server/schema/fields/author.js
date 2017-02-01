var graphql = require('graphql');
var category = require('../Types/category');
//var i18 = require('../../../app/i18n');

var author = {
  _id: { type: graphql.GraphQLString },
};
var info = {
    name: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString }
};

Object.assign(author, info);

author.birthDate = { type: graphql.GraphQLString };
author.deathDate = { type: graphql.GraphQLString };
author.image = { type: graphql.GraphQLString };
author.category = { type: new graphql.GraphQLList(category) };

//i18.appLocals
['de'].forEach((lang)=> {
  author['info_' + lang] = { type: new graphql.GraphQLObjectType({
    name: 'info_' + lang,
    fields: () => (info)
  }) }
});

module.exports = author;
