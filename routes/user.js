var express = require('express')
var router = express.Router()
var Users = require('../models/user')

/* GET home page. */
router.get('/', async (req, res, next) => {
  let token = req.headers.authorization
  token = token.replace('NaN', 'Bearer ')
  if (token === 'Bearer J2520ljx8Q5p2CP6489b432dc2f5') {
    try {
      const users = await Users.find()

      return res.send({ users })
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'Couldnt get the users list' })
    }
  } else {
    res.status(400).send('Tentativa de pesquisa de usuários inválida')
  }
})

router.post('/create', async (req, res, next) => {
  let token = req.headers.authorization
  token = token.replace('NaN', 'Bearer ')
  if (token === 'Bearer J2520ljx8Q5p2CP6489b432dc2f5') {
    try {
      const users = await Users.create(req.body)
      return res.send({ users })
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'Registration failed' })
    }
  } else {
    res.status(400).send('Tentativa de criação de usuário inválida')
  }
})

router.delete('/delete/:_id', async (req, res, next) => {})

module.exports = router
