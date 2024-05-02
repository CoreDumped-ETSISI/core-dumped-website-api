const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
var RateLimit = require("express-rate-limit");

const EventRoutes = require("./routes/events");
const ProjectRoutes = require("./routes/projects");
const PeopleRoutes = require("./routes/people");
const AdminRoutes = require("./routes/admin");
const CardRoutes = require("./routes/cards");
const ItemsRoutes = require("./routes/items")
const LoansRoutes = require("./routes/loans")

const LoanersRoutes = require("./routes/loaners")


mongoose.connect(process.env.MONGO_URI);

mongoose.Promise = global.Promise;

// set up rate limiter: maximum of five requests per minute
var limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per windowMs
});

// apply rate limiter to all requests
app.use(limiter);

//middleware for parsing json and x-www-form-urlencoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Headers
app.use(
  cors({
    origin: "*",
    methods: "PATCH, POST, DELETE, GET",
    allowedHeaders: "Content-Type, Authorization",
  })
);

// Routes which should handle requests
app.use("/cartas", CardRoutes);
app.use("/eventos", EventRoutes);
app.use("/proyectos", ProjectRoutes);
app.use("/personas", PeopleRoutes);
app.use("/login", AdminRoutes);
app.use("/items", ItemsRoutes)
app.use("/loaners", LoanersRoutes)
app.use("/loans", LoansRoutes)


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
