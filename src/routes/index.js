var express = require('express');
var router = express.Router();
var usuarioController=require("../controllers/usuarioController")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/usuario",usuarioController.index)

module.exports = router;
