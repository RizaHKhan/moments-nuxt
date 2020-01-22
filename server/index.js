const express = require('express')
const cors = require('cors')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const router = require('./router')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

// Attaches the body object to the request object
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use('/moments/api/', router)
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

module.exports = start
