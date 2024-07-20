import { getDb } from '../util/database.js';

class Todo {
  constructor(content) {
    this.content = content;
  }

  static getAll() {
    const db = getDb();
    return db.collection('todos').find().toArray()
  }

  save() {
    const db = getDb();
    return db
      .collection('todos')
      .insertOne(this)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }
}

export default Todo;
