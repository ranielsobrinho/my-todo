const config = {
    username: "dev",
    password: "95751535r",
    database: "todos",
    host: "localhost",
    dialect: "postgres" 
}
var Sequelize = require("sequelize");
var sequelize = new Sequelize(config);

const Users = sequelize.define("Users", {
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    classMethods: {
        associate: (models) => {
            Users.hasMany(models.Todos);
        }
    }
});
Users.sync({force: true});

module.exports = Users;