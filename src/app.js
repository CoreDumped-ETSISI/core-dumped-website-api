const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");

const EventRoutes = require("./routes/events");
const ProjectRoutes = require("./routes/projects");
const PeopleRoutes = require("./routes/people");
const AdminRoutes = require("./routes/admin");

mongoose.connect(process.env.MONGO_URI);

mongoose.Promise = global.Promise;

//middleware for parsing json and x-www-form-urlencoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/eventos", EventRoutes);
app.use("/proyectos", ProjectRoutes);
app.use("/personas", PeopleRoutes);
app.use("/login", AdminRoutes);

//If no endpoint consumes the request, throw a 404 error
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

//If an error ocurrs, send it to user
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
