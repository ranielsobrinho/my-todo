const config = {
    username: "dev",
    password: "95751535r",
    database: "todos",
    host: "localhost",
    dialect: "postgres" 
}
var { Sequelize, DataTypes } = require("sequelize");
var sequelize = new Sequelize(config);

const Todos = sequelize.define("Todos", {
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    classMethods: {
        associate: (models) => {
            Todos.belongsTo(models.Users);
        }
    }
});

Todos.sync({force: true})

module.exports = Todos;