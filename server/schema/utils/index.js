var graphql = require('graphql');

module.exports = {};
module.exports.transformFieldsForMutation = (fields, removeId, subTypes) => {
  if(removeId) delete fields._id;
  if(subTypes) Object.keys(fields).map(function(key, index) {
   if(subTypes.indexOf(key)) fields[key] = {
     type: graphql.GraphQLString
   }
  });
  return fields;
}
