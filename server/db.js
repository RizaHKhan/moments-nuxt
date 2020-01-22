const mongoose = require('mongoose')
const start = require('./index')

require('dotenv').config({ path : __dirname + '/config/.env' })

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connectin error'))
db.once('open', function() {
  console.log('DB Connection Established')
  start()
})

module.exports = db
