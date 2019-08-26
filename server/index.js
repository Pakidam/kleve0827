require("dotenv").config();

var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var morgan = require("morgan");

var routes = require("./routes");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(morgan("dev"));

//var Users = require("./routes/Users");

app.use("/users", routes.auth);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
