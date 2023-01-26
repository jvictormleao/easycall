var express = require('express')
var router = express.Router()
var Users = require('../models/user')

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const users = await Users.find()

    return res.send({ users })
  } catch (err) {
    console.log(err)
    return res.status(400).send({ error: 'Couldnt get the users list' })
  }
})

router.post('/create', async (req, res, next) => {
  try {
    const users = await Users.create(req.body)
    return res.send({ users })
  } catch (err) {
    console.log(err)
    return res.status(400).send({ error: 'Registration failed' })
  }
})

module.exports = router
