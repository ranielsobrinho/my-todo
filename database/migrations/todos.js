const Sequelize = require("sequelize");
const database = require('../db');

const Todos = database.define("Todos", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    done: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
});

Todos.sync({force: true})

module.exports = Todos;