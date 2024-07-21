import Todo from '../models/todo.js';

const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    res.send({ msg: 'failed' });
  }
};

const getTodo = async (req, res, next) => {
  try {
    const { todoId } = req.params;
    const todo = await Todo.findById(todoId);
    if (todo) {
      res.send(todo);
    } else {
      throw 'failed';
    }
  } catch (error) {
    res.send({ msg: 'failed' });
  }
};

const createTodo = async (req, res, next) => {
  try {
    const { content } = req.body;
    const todo = new Todo({ content });
    await todo.save();
    res.send({ msg: 'success' });
  } catch (error) {
    res.send({ msg: 'failed' });
    console.log(error);
  }
};

const editTodo = async (req, res, next) => {
  try {
    const { todoId } = req.params;
    const { content } = req.body;

    const todo = await Todo.findById(todoId);
    if (todo) {
      todo.content = content
      await todo.save()
      res.send(todo);
    } else {
      throw 'failed';
    }

  } catch (error) {
    res.send({ msg: 'failed' });
    console.log(error);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const { todoId } = req.params;
    await Todo.findByIdAndDelete(todoId)
    res.send({ msg: 'delete success' })
  } catch (error) {
    res.send({ msg: 'failed' });
    console.log(error);
  }
};

export { getTodos, getTodo, createTodo, editTodo, deleteTodo };
