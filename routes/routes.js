const express = require("express");
const TodoController = require("../controllers/TodoController");
const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/AuthController");
const auth = require("../auth");

const routes = express.Router();

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.user);
routes.post("/users", UserController.store);
routes.put("/users/:id", auth, UserController.update);
routes.delete("/users/:id", auth, UserController.delete);

routes.post("/users/:userId/todos", auth, TodoController.store);
routes.get("/users/:userId/todos", auth, TodoController.index);
routes.get("/todos/:id", auth, TodoController.getTodo);
routes.put("/todos/:id", auth, TodoController.update);
routes.delete("/todos/:id", auth, TodoController.delete);

routes.post("/token", AuthController.token);

module.exports = routes;
