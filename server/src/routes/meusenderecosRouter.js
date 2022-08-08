var express = require('express');
var router = express.Router();
var meusenderecosController=require("../controllers/meusenderecosController")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('meusenderecos', { title: 'Express' });
  });
router.get( "/meusenderecos",meusenderecosController.meusenderecos)


module.exports = router;
