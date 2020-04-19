require("./src/data/mongoose");
const Task = require("./src/models/task");

// Task.findByIdAndRemove("5e9af501bf6a79f7b8a5b9af")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments();
//   })
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

const removeTaskAndCount = async (id) => {
  const task = await Task.findByIdAndRemove(id);
  const count = await Task.countDocuments();
  return count;
};

removeTaskAndCount("5e9af501bf6a79f7b8a5b9af")
  .then((result) => console.log(result))
  .catch((e) => console.error(e));
