const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is invalid");
      }
    },
  },
});

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  complated: {
    type: Boolean,
    default: false,
  },
});

// const me = new User({
//   name: "kokoro",
//   email: "juicypussy@gmail.com",
// });

const job = new Task({
  description: "blow",
  complated: false,
});

job
  .save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.error(error);
  });
