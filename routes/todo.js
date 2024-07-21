import express from 'express';
import {
  getTodos,
  getTodo,
  createTodo,
  editTodo,
  deleteTodo,
} from '../controllers/todo.js';

const router = express.Router();

router.get('/todos', getTodos);

router.get('/todo/:todoId', getTodo);
router.post('/todo', createTodo);
router.put('/todo/:todoId', editTodo);
router.delete('/todo/:todoId', deleteTodo);

export default router;
