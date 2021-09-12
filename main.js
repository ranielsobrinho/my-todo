const express  = require("express");
const consign = require("consign");
const routes = require('./routes');
require('./database/db');

const app = express();
app.use(express.json());
app.use(routes)

app.listen(3333);

// consign()
// .include("libs/config.js")
// .then("db.js")
// .then("libs/middlewares.js")
// .then("routes.js")
// .then("libs/boot.js")
// .into(app);
