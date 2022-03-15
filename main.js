const express = require('express')
const routes = require('./routes/routes')
require('./database/db')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
)
app.use(routes)

app.listen(3333)
