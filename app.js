/** @format */

"use strict";

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Server API REST nodeJS - ExpressJS",
      version: "1.0.0",
    },
    servers: [{ url: "http://localhost:3000/" }],
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS "
  );
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Content-Type", "text/plain");
  next();
});

// Import Routes
const appRoutes = require("./routes/app");
const usersRoutes = require("./routes/users");

app.listen(3000, () => {
  console.log("Express Server Port: 3000: \x1b[32m%s\x1b[0m", "Online");
});

// Routes
app.use("/api", appRoutes);
app.use("/api/users", usersRoutes);
