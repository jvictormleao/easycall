var express = require('express')
var router = express.Router()
var Chamados = require('../models/chamado')

/* CHAMADOS */
router.get('/', async (req, res, next) => {
  let token = req.headers.authorization
  token = token.replace('NaN', 'Bearer ')
  if (token === 'Bearer J2520ljx8Q5p2CP6489b432dc2f5') {
    try {
      const chamados = await Chamados.find().populate('usuario')

      return res.send({ chamados })
    } catch (err) {
      console.log(err)
      return res
        .status(400)
        .send({ error: 'Couldnt get the chamados list' + err })
    }
  } else {
    res.status(400).send('Tentativa de pesquisa de chamados inválida')
  }
})

router.post('/create', async (req, res, next) => {
  let token = req.headers.authorization
  token = token.replace('NaN', 'Bearer ')
  if (token === 'Bearer J2520ljx8Q5p2CP6489b432dc2f5') {
    try {
      const chamados = await Chamados.create(req.body)
      return res.send({ chamados })
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'Registration failed' + err })
    }
  } else {
    res.status(400).send('Tentativa de abertura de chamado inválida')
  }
})

router.delete('/delete/:_id', async (req, res, next) => {})

module.exports = router
