var workDb = require('../../nedb');
const Work = {};

Work.find = (args) => {
  const query = args._id ? { _id: args._id } : {};

  return new Promise((resolve, reject) => {
    if (args._id) {
      workDb.find(query)
      .exec((err, res) => err ? reject(err) : resolve(res));
    } else {
      workDb.find(query)
      .skip(args.offset)
      .limit(args.limit)
      .exec((err, res) => err ? reject(err) : resolve(res));
    }
  });
};

Work.create = (args) => {
  args.authors = JSON.parse(args.authors);
  //args.ingredients = JSON.parse(args.ingredients);

  return new Promise((resolve, reject) => {
    workDb.insert(args, (err, newDoc) => err ? reject(err) : resolve(newDoc));
  });
};

Work.update = (args) => {
  const query = { _id: args._id };
  args.authors = JSON.parse(args.authors);
  //args.ingredients = JSON.parse(args.ingredients);
  delete args._id;

  return new Promise((resolve, reject) => {
    workDb.update(query, { $set: args }, (err, newDoc) => err ? reject(err) : resolve(newDoc));
  });
};

module.exports = Work;
