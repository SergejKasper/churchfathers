var graphql = require('graphql');

module.exports = {};
module.exports.transformFieldsForMutation = (fields, withId) => {
  if(!withId) delete fields._id;
  Object.keys(fields).map(function(key, index) {
   if (typeof fields[key].type === 'object'){
     fields[key] = {type: graphql.GraphQLString}
   }
  });
  return fields;
}
