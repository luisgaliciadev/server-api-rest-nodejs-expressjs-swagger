/** @format */

"use strict";

const express = require("express");
const app = express();

/**
 * @swagger
 *  components:
 *    schema:
 *      User:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *          userName:
 *            type: string
 *
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: This api is used to get users list
 *    tags: [users]
 *    description: get list users
 *    responses:
 *      200:
 *        description: get list users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schema/User'
 */
app.get("/", (req, res, next) => {
  const users = [
    {
      id: 1,
      userName: "user_1",
    },
    {
      id: 2,
      userName: "user_2",
    },
  ];
  return res.status(200).send({
    ok: true,
    message: "Users list",
    data: users,
  });
});

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *    summary: This api is used to get at user
 *    tags: [users]
 *    description: get list users
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID required
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: get user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#components/schema/User'
 */
app.get("/:id", (req, res, next) => {
  const userID = req.params.id;
  const users = [
    {
      id: 1,
      userName: "user_1",
    },
    {
      id: 2,
      userName: "user_2",
    },
  ];
  const user = users.find((user) => user.id == userID);
  if (user) {
    return res.status(200).send({
      ok: true,
      message: "User info",
      data: user,
    });
  }

  return res.status(200).send({
    ok: true,
    message: "user does not exist",
    data: {},
  });
});

/**
 * @swagger
 * /api/users/add:
 *  post:
 *    summary: This api is used to add user
 *    tags: [users]
 *    description: add user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schema/User'
 *    responses:
 *      200:
 *        description: add user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#components/schema/User'
 */
app.post("/add", (req, res, next) => {
  const user = req.body;
  if (user) {
    return res.status(200).send({
      ok: true,
      message: "User added successfully",
      data: user,
    });
  }
});

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    summary: This api is used to update at user
 *    tags: [users]
 *    description: update user
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID required
 *        schema:
 *          type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schema/User'
 *    responses:
 *      200:
 *        description: update user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#components/schema/User'
 */
app.put("/:id", (req, res, next) => {
  const user = req.body;
  if (user) {
    return res.status(200).send({
      ok: true,
      message: "User updated successfully",
      data: user,
    });
  }
  return res.status(200).send({
    ok: true,
    message: "user does not exist",
    data: {},
  });
});

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *    summary: This api is used to update at user
 *    tags: [users]
 *    description: update user
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID required
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: update user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#components/schema/User'
 */
app.delete("/:id", (req, res, next) => {
  const userID = req.params.id;
  const users = [
    {
      id: 1,
      userName: "user_1",
    },
    {
      id: 2,
      userName: "user_2",
    },
  ];
  const user = users.find((user) => user.id == userID);
  if (user) {
    return res.status(200).send({
      ok: true,
      message: "User deleted successfully",
      data: user,
    });
  }

  return res.status(200).send({
    ok: true,
    message: "user does not exist",
    data: {},
  });
});

module.exports = app;
