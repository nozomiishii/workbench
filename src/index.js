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
