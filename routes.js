const express = require('express');
const TodoController = require('./controllers/TodoController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/users/:user_id/todos', TodoController.store);

module.exports = routes;