require("dotenv").config();
const exprees = require("express");
require("express-async-errors");
const cors = require("cors");
const app = exprees();
const mongoose = require("mongoose");
const error = require("./app/middleware/error");
const auth = require("./app/router/auth");
const weatherRoute = require("./app/router/weather");
app.use(cors());

mongoose
  .connect("mongodb://localhost/weather")
  .then(() => console.log("connect to mongodb.."))
  .catch(() => console.log("connect to mongodb.."));

app.use(exprees.json());
app.use("/api/auth", auth);
app.use("/api/weather", weatherRoute);
app.use(error);

const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(`Listening on port ${Port}...`));
