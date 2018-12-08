require('./models')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const path = require('path')
const cors = require('cors')
const resolve = file => path.resolve(__dirname, file)
const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache ? 1000 * 60 * 60 * 24 : 0
})
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.enable('trust proxy')
app.use(cors({
  origin: true,
  credentials: true
}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(function (req, res, next) {
  const domain = `${req.protocol}://${req.get('host')}`
  res.locals.domain = domain
  next()
})
app.use('/public', serve('./public', true))
app.use('/v1', require('./routes/base'))
app.use('/v1', require('./routes/tag'))
app.use('/v1', require('./routes/user'))
app.use('/v1', require('./routes/article'))
app.use('/v1', require('./routes/oauth'))
app.use('/v1', require('./routes/comment'))
app.use(require('./routes/tool'))
app.all('/v1/*', (req, res) => {
  res.json({
    success: false,
    err: 'api is invalid'
  })
})

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
