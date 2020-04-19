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

// const bcrypt = require("bcryptjs");

// const func = async () => {
//   const password = "mtZHbw5C.";
//   const hashedPassword = await bcrypt.hash(password, 8);

//   console.log(password);
//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare(password, hashedPassword);
//   console.log(isMatch);
// };
// func();
