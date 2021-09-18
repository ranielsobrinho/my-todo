const express = require('express');
const TodoController = require('../controllers/TodoController');
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.get('/user', UserController.user);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/users/:userId/todos', TodoController.store);
routes.get('/users/:userId/todos', TodoController.index);
routes.put('/users/:id/todos', TodoController.update);
routes.delete('/users/:id/todos', TodoController.delete);

routes.post('/token', AuthController.token);

module.exports = routes;