const Sequelize = require("sequelize");
const dbConfig = require("../libs/config");

let sequelize = null;

module.exports = () => {
    if(!sequelize){
        sequelize = new Sequelize(
            dbConfig.database,
            dbConfig.dialect,
            dbConfig.host,
            dbConfig.password,
            dbConfig.port,
            dbConfig.user
        );
    }
    return sequelize;
};