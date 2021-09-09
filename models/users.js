/* Initialize Sequelize */
const config = {
    username: "dev",
    password: "95751535r",
    database: "todos",
    host: "localhost",
    dialect: "postgres" 
}
var Sequelize = require("sequelize");
var sequelize = new Sequelize(config);

/* Define Models */
const User = sequelize.define("Users", {
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

//User.sync({force: true});