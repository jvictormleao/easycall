var express = require('express')
var router = express.Router()
var Login = require('../models/user')
const erro = 'Usuário ou senha incorreta'

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('login')
})

router.get('/login', function (req, res, next) {
  var passedVariable = req.query.erro
  res.render('login', { erro: passedVariable })
})

router.post('/login/authentication', async (req, res, next) => {
  if (req.body.flogin == '' && req.body.fpass == '') {
    res.redirect('/login')
  } else {
    try {
      const user = await Login.findOne({
        login: req.body.flogin
      })

      if (user.senha === req.body.fpass) {
        const sessionData = {
          id: user._id,
          nome: user.nome,
          token: 'J2520ljx8Q5p2CP6489b432dc2f5'
        }
        const expirationTime = new Date(Date.now() + 1800000)

        res.cookie('session', sessionData, {
          httpOnly: true,
          expires: expirationTime
        })
        return res.redirect('/main')
      } else {
        return res.redirect('/login?erro=' + erro)
      }
    } catch (err) {
      return res.redirect('/login?erro=' + erro)
    }
  }
})

module.exports = router
