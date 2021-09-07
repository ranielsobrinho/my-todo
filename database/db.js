const {Pool} = require("pg")
const dbConfig = require("../libs/config.js");

let pool = new Pool({
            host: dbConfig.host,
            database: dbConfig.database,
            user: dbConfig.user,
            password: dbConfig.password,
            port: dbConfig.port
})

module.exports = {
    getTodo: (text, params) =>{
        return pool.query(text, params)
    },
    query: (text, callback) => {
        return pool.query(text, callback)
    }
};