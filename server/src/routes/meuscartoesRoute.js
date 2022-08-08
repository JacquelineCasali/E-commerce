var express = require('express');
var router = express.Router();
var meuscartoesController=require("../controllers/meuscartoesController")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('cartoes', { title: 'Express' });
  });
router.get( "/cartoes",meuscartoesController.cartoes)


module.exports = router;
