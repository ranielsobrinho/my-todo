const express  = require("express");
const routes = require('./routes/routes');
require('./database/db');
const cors = require('cors');
const authorization =  require('./auth');

const app = express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(routes)
const auth = authorization(app);
app.use(auth.initialize());

app.listen(3333);
