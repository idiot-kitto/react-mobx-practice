let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
    console.log("Connected to mongodb server");
});
mongoose.connect('mongodb://localhost:27017/mongodb-tutorial');

let Book = require('./models/book');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 3000;

let router = require("./routes")(app, Book);

let server = app.listen(port, () => {
  console.log("Express server has started on port " + port);
});
