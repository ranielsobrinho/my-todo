require('dotenv/config');
module.exports = {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    dialect: 'postgres',
    host: process.env.DB_HOST
}