<!-- @format -->

# Simple Node with Express Server with REST API

Server API REST and Swagger documentation API

## Features

- Express
- REST API

## Requirements

- [node & npm](https://nodejs.org/en/)

## Installation

- `npm install`
- `npm start`

### GET Routes

- visit http://localhost:3000/api
  - /messages
  - /users

#### Postman

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API
- Create a message with:
  - URL: http://localhost:3000/messages
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "text": Hello World" }`
