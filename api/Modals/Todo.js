import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
});

const TodoModel = mongoose.model("todos", TodoSchema);

export default TodoModel;
