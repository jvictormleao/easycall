var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login')
})

router.post('/authentication', function (req, res, next) {
  if (req.body.flogin == 'Admin' && req.body.fpass == 'Admin') {
    var auth = 'R0TTH3N'
    res.redirect('/main?data=' + auth)
  } else {
    res.send('ERRO')
    console.log('Usuário ou senha invalido')
  }
})

module.exports = router
