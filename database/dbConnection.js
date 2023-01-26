const mongoose = require('mongoose')
const db_uri = require('./config')

if (mongoose.connection.readyState === 1) return mongoose.connection.readyState
mongoose.connect(db_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}),
  err => {
    if (err) {
      return console.log('Could not connect to DB: ', err)
    } else {
      return console.log('Successfully connected to database...')
    }
  }
mongoose.Promise = global.Promise

module.exports = mongoose
