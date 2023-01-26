var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.query.data)
  if (req.query.data == null){
    res.redirect('/login')
  } else {
    console.log(req.query.data)
    var passedVariable = req.query.data
      res.render('main', { data: passedVariable })
  }
  
  
})

module.exports = router
