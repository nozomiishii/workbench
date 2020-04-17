const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connct ro db");
    }
    const db = client.db(databaseName);
    db.collection("users").insertMany(
      [
        {
          name: "nozomi",
          age: 28,
        },
        {
          name: "midori",
          age: 27,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("unable to insert taskes");
        }
        // console.log(result);
        console.log(result.ops);
      }
    );

    db.collection("tasks").insertMany(
      [
        {
          description: "clean pc",
          completed: true,
        },
        {
          description: "lick pussy",
          completed: false,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log(error);
        }
        console.log(result.ops);
      }
    );
  }
);
