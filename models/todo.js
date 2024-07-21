import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  }
})

export default mongoose.model('Todo', todoSchema)
