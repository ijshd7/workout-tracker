const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Connect mongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/mydatabase')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
const studentAPI = require('../backend/routes/workout.route')
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
// API
app.use('/api', studentAPI)
// Create port
const port = process.env.PORT || 4000
// eslint-disable-next-line no-unused-vars
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// Find 404
app.use((req, res, next) => {
  // eslint-disable-next-line no-undef
  next(createError(404))
})
// error handler
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})