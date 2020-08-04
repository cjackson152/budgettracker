const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const MongoClient = requier("mongodb").MongoClient;
const MONGO_URL = "mongodb://<dbuser>:<dbpassword>@ds159235.mlab.com:59235/heroku_bwppq39h";
MongoClient.connect(MONGO_URL, (err, db) => {
  if (err) {
    return console.log(err);
  }
  
})
const PORT = 3001;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});