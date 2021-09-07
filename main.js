const express  = require("express");
const consign = require("consign");

const app = express();
app.use(express.json());

consign()
.include("db.js")
.then("models")
.then("libs/middlewares.js")
.then("routes")
.then("libs/boot.js")
.into(app);
