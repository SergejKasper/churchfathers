var db = require('../../nedb'),
authorDb = db.authorDb;
const Author = {};

Author.find = (args) => {
  const query = {};;
  switch (args) {
    case args._id:
      query = { _id: args._id } ;
      break;
    case args.name:
      query = { _id: args.name } ;
      break;
    default:
      break;
  }

  return new Promise((resolve, reject) => {
    if (args._id || args.name) {
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

Author.create = args => {
  args.category = JSON.parse(args.category);
  args.info_de = JSON.parse(args.info_de);
  new Promise((resolve, reject) => {
  authorDb.insert(args, (err, newDoc) => err ? reject(err) : resolve(newDoc));
  });
}

Author.update = (args) => {
  const query = { _id: args._id };
  args.category = JSON.parse(args.category);
  args.info_de = JSON.parse(args.info_de);
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
