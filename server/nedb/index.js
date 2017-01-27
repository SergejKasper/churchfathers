var Datastore = require('nedb');
var path = require('path');

module.exports = {};
module.exports.categoryDb = new Datastore({ filename: path.resolve(__dirname, './category.db'), autoload: true });
module.exports.couponDb = new Datastore({ filename: path.resolve(__dirname, './coupon.db'), autoload: true });
module.exports.customerDb = new Datastore({ filename: path.resolve(__dirname, './customer.db'), autoload: true });
module.exports.productDb = new Datastore({ filename: path.resolve(__dirname, './product.db'), autoload: true });
