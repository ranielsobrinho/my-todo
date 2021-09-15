const express = require('express');
const TodoController = require('./controllers/TodoController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/users/:userId/todos', TodoController.store);
routes.get('/users/:userId/todos', TodoController.index);
routes.put('/users/:id/todos', TodoController.update);
routes.delete('/users/:id/todos', TodoController.delete);

module.exports = routes;