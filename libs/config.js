require('dotenv/config');
module.exports = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port:5432,
    dialect: 'postgres',
    host: process.env.DB_HOST,
    jwtSecret: process.env.JWT_KEY,
    jwtSession: process.env.JWT_SESSION
}