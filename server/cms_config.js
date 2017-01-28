const printSchema = require('graphql').printSchema;
const schema = require('./schema');
const path = require('path');

module.exports = {
  schema: printSchema(schema),
  rules: {
    author: {
      fields: {
        birthDate: {
          label: 'Date of Birth',
          inputType: 'date',
        },
        deathDate: {
          label: 'Date of Death',
          inputType: 'date',
        }
      },
    },
    work: {
      fields: {
        writingDate: {
          label: 'expiration date',
          inputType: 'date',
        }
      },
    },
  },
};
