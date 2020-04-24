const express = require("express");
const app = express();
require("./data/mongoose");
const usersRouter = require("./routers/users");
const tasksRouter = require("./routers/tasks");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(usersRouter);
app.use(tasksRouter);

app.listen(port, () => console.log(`server started on port ${port}`));

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   const task = await Task.findById("5ea35445c9ea72687a31b62b");
//   console.log(task.owner);
//   const user = await User.findById(task.owner);
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();
