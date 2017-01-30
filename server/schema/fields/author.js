var graphql = require('graphql');
var category = require('../Types/category');
module.exports = {
  _id: { type: graphql.GraphQLString },
  name: { type: graphql.GraphQLString },
  birthDate: { type: graphql.GraphQLString },
  deathDate: { type: graphql.GraphQLString },
  category :  { type: new graphql.GraphQLList(category) }
};
