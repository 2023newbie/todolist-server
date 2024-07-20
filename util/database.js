import { MongoClient } from 'mongodb';

let _db;

const mongoConnect = callback => {
  MongoClient.connect(process.env.MONGO_URL)
    .then(client => {
      console.log('Connected!');
      _db = client.db(process.env.DATABASE_NAME);
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

export { mongoConnect, getDb };
