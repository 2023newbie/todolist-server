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

router.get('/todo', getTodo);
router.post('/todo', createTodo);
router.put('/todo', editTodo);
router.delete('/todo', deleteTodo);

export default router;
