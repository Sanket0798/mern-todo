import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import TodoModel from "./Modals/Todo.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("Error connecting Database"));

app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/add", async (req, res) => {
  try {
    const task = req.body.task;
    const result = await TodoModel.create({ task: task });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(8800, () => {
  console.log("Connected to Backend!");
});
