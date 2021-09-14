const express = require('express');
const TodoController = require('./controllers/TodoController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/users/:userId/todos', TodoController.store);
routes.get('/users/:userId/todos', TodoController.index);

module.exports = routes;