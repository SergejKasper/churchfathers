const printSchema = require('graphql').printSchema;
const schema = require('./schema');
const path = require('path');

module.exports = {
  schema: printSchema(schema),
  uploadRoot: path.resolve(__dirname, '../assets/images'),
  rules: {
    author: {
      uploadPath: 'author',
      fields: {
        birthDate: {
          label: 'Date of Birth',
          inputType: 'date',
        },
        deathDate: {
          label: 'Date of Death',
          inputType: 'date',
        },
        image: {
	         inputType: 'file',
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
