var createError = require('http-errors')
var cors = require('cors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var livereload = require('livereload')
var connectLiveReload = require('connect-livereload')

var loginRouter = require('./routes/login')
var mainRouter = require('./routes/main')
var userRouter = require('./routes/user')
var chamadoRouter = require('./routes/chamado')

const liveReloadServer = livereload.createServer()
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/')
  }, 100)
})

var app = express()

app.use(cors())

app.use(connectLiveReload())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', loginRouter)
app.use('/main', mainRouter)
app.use('/user', userRouter)
app.use('/chamado', chamadoRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
