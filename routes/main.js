var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  //console.log(req.query.data)
  //if (req.query.data == null) {
  //res.redirect('/login')
  //} else {
  //console.log(req.query.data)
  sessionData = req.cookies.session
  if (sessionData) {
    res.render('main', { data: sessionData })
  } else {
    res.redirect('/login')
  }

  //}
})
