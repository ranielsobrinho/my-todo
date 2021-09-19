const Sequelize = require("sequelize");
const database = require('../db');
const bcrypt = require('bcrypt');
const { password } = require("pg/lib/defaults");

const Users = database.define("Users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});
Users.sync({force: true});

module.exports = Users;