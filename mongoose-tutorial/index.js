const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

// We require the routes 
const todoRouter = require('./routes/router')

// this is the database connection
// note: you have to use your own mongodb credentials
mongoose.connect('mongodb://username:password@localhost/', {useNewUrlParser: true})
.catch(e => {
  console.error("connection issue", e.message)
})

const db = mongoose.connection
// initialize the app
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())

// Checks if the connection works
db.on('error', console.error.bind(console,' mongo connection error'))

app.use('/', todoRouter)

// starts the server on port 3001
app.listen(3001, console.log("server online"));