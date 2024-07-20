import Todo from "../models/todo.js"

const getTodos = (req, res, next) => {
    Todo.getAll().then(todos => res.json(todos))
}

const getTodo = (req, res, next) => {

}

const createTodo = (req, res, next) => {
    const { content } = req.body
    const todo = new Todo(content)
    todo.save().then(() => res.send({ msg: 'success' }))
}

const editTodo = (req, res, next) => {

}

const deleteTodo = (req, res, next) => {

}

export { getTodos, getTodo, createTodo, editTodo, deleteTodo }