const todos = require("../models/todos");

module.exports = app => {
    const Todos = app.models.todos;
    app.get("/todos", (req, res) => {
        Todos.findAll({}, (todos) => {
            res.json({todos: todos});
        })
    });
}