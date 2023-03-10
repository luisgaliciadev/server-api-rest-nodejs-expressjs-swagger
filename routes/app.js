/** @format */

"use strict";

const express = require("express");
const app = express();

/**
 * @swagger
 * /api/:
 *  get:
 *    summary: This api is used to check if get method is working or not
 *    tags: [app]
 *    description: Test api get
 *    responses:
 *      200:
 *        description: To test get method
 */
app.get("/", (req, res, next) => {
  return res.status(200).send({
    ok: true,
    message: "Server API REST online.",
  });
});

module.exports = app;
