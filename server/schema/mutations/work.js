var graphql = require('graphql');
var types = require('../Types');
var resolvers = require('../Resolvers');

module.exports = {}

module.exports.work_create = {
  type: types.work,
  description: 'add new work',
  args: {
    name: {
      type: graphql.GraphQLString
    },
    language: {
      type: graphql.GraphQLString
    },
    shortDescription: {
      type: graphql.GraphQLString
    },
    pageTitle: {
      type: graphql.GraphQLString
    },
    metaDescription: {
      type: graphql.GraphQLString
    },
    metaKeywords: {
      type: graphql.GraphQLString
    },
    authors: {
      type: graphql.GraphQLString
    },
    writingDate: {
      type: graphql.GraphQLString
    },
    image: {
      type: graphql.GraphQLString
    },
    isPublished: {
      type: graphql.GraphQLBoolean
    }
  },
  resolve: (_, args) => resolvers.Work.create(args),
};
module.exports.work_update = {
  type: types.work,
  description: 'update work',
  args: {
    _id: {
      type: graphql.GraphQLString
    },
    name: {
      type: graphql.GraphQLString
    },
    language: {
      type: graphql.GraphQLString
    },
    shortDescription: {
      type: graphql.GraphQLString
    },
    pageTitle: {
      type: graphql.GraphQLString
    },
    metaDescription: {
      type: graphql.GraphQLString
    },
    metaKeywords: {
      type: graphql.GraphQLString
    },
    authors: {
      type: graphql.GraphQLString
    },
    writingDate: {
      type: graphql.GraphQLString
    },
    image: {
      type: graphql.GraphQLString
    },
    isPublished: {
      type: graphql.GraphQLBoolean
    }
  },
  resolve: (_, args) => resolvers.Work.update(args),
};
module.exports.work_remove = {
  type: types.work,
  description: 'remove category',
  args: {
    _id: {
      type: graphql.GraphQLString
    },
  },
  resolve: (_, args) => resolvers.Work.remove(args),
};
