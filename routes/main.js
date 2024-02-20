var express = require('express')
var router = express.Router()
var Chamados = require('../models/chamado')

/* GET home page. */
router.get('/', async (req, res, next) => {
  //console.log(req.query.data)
  //if (req.query.data == null) {
  //res.redirect('/login')
  //} else {
  //console.log(req.query.data)
  sessionData = req.cookies.session
  if (sessionData) {
    let token = req.headers.authorization
    token = token.replace('NaN', 'Bearer ')
    if (token === 'Bearer J2520ljx8Q5p2CP6489b432dc2f5') {
      try {
        const chamados = await Chamados.find().populate('usuario')

        return res.send({ chamados })
        res.render('main', { data: sessionData, dataChamados: chamados })
      } catch (err) {
        console.log(err)
        return res
          .status(400)
          .send({ error: 'Couldnt get the chamados list' + err })
      }
    } else {
      res.status(400).send('Tentativa de pesquisa de chamados inválida')
    }
  } else {
    res.redirect('/login')
  }

  //}
})

module.exports = router
