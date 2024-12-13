const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());


const tasks = [];
let taskIdCounter = 0;

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json({
    tasks: tasks,
  });
});

app.get("/tasks/:task_id", (req, res) => {
  const task_id = Number(req.params["task_id"]);

  if (isNaN(task_id)) {
    return res.status(400).json({
      msg: "Invalid task ID",
    });
  }

  const task = tasks.find((t) => t.id === task_id);

  if (!task) {
    return res.status(404).json({
      msg: "Task not found",
    });
  }

  res.json({
    task: task,
  });
});

// Create a new task
app.post("/tasks", (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !description || !status) {
    return res.status(400).json({
      msg: "Title, description, and status are required",
    });
  }

  const newTask = {
    id: taskIdCounter++,
    title: title,
    description: description,
    status: status, 
  };

  tasks.push(newTask);

  res.status(201).json({
    msg: "Task created successfully",
    task: newTask,
  });
});


app.put("/tasks/:task_id", (req, res) => {
  const task_id = Number(req.params["task_id"]);

  if (isNaN(task_id)) {
    return res.status(400).json({
      msg: "Invalid task ID",
    });
  }

  const task = tasks.find((t) => t.id === task_id);

  if (!task) {
    return res.status(404).json({
      msg: "Task not found",
    });
  }

  const { title, description, status } = req.body;

  if (title) task.title = title;
  if (description) task.description = description;
  if (status) task.status = status;

  res.json({
    msg: "Task updated successfully",
    task: task,
  });
});

app.delete("/tasks/:task_id", (req, res) => {
  const task_id = Number(req.params["task_id"]);

  if (isNaN(task_id)) {
    return res.status(400).json({
      msg: "Invalid task ID",
    });
  }

  const taskIndex = tasks.findIndex((t) => t.id === task_id);

  if (taskIndex === -1) {
    return res.status(404).json({
      msg: "Task not found",
    });
  }

  tasks.splice(taskIndex, 1);

  res.json({
    msg: "Task deleted successfully",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
