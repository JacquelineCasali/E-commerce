var express = require('express');
var router = express.Router();
var adicionarcartoesController=require("../controllers/adicionarcartoesController")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('adicionarcartoes', { title: 'Express' });
  });
router.get( "/adicionarcartoes",adicionarcartoesController.adicionarcartoes)


module.exports = router;
