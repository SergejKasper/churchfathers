var db = require('../../nedb'),
authorDb = db.authorDb;
const Author = {};

Author.find = (args) => {
  const query = args._id ? { _id: args._id } : {};

  return new Promise((resolve, reject) => {
    if (args._id) {
      authorDb.find(query)
      .exec((err, res) => err ? reject(err) : resolve(res));
    } else {
      authorDb.find(query)
      .skip(args.offset)
      .limit(args.limit)
      .exec((err, res) => err ? reject(err) : resolve(res));
    }
  });
};

Author.create = args => new Promise((resolve, reject) => {
  authorDb.insert(args, (err, newDoc) => err ? reject(err) : resolve(newDoc));
});

Author.update = (args) => {
  const query = { _id: args._id };
  delete args._id;

  return new Promise((resolve, reject) => {
    authorDb.update(query, { $set: args }, (err, newDoc) => err ? reject(err) : resolve(newDoc));
  });
};

Author.remove = (args) => {
  const query = { _id: args._id };

  return new Promise((resolve, reject) => {
    authorDb.remove(query, {}, err => err ? reject(err) : resolve(query));
  });
  /**
   * resolve(query), because we have to
   * return some fields to graphQL which this Type has
   */
};

module.exports = Author;
