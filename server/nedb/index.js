var Datastore = require('nedb');
var path = require('path');

module.exports = {};
module.exports.workDb = new Datastore({ filename: path.resolve(__dirname, './work.db'), autoload: true });
module.exports.authorDb = new Datastore({ filename: path.resolve(__dirname, './author.db'), autoload: true });
