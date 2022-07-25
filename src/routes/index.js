var express = require('express');
var router = express.Router();
var usuarioController=require("../controllers/usuarioController")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

<<<<<<< HEAD:src/routes/indexRoute.js
module.exports = router;
=======
router.get("/usuario",usuarioController.index)

module.exports = router;
>>>>>>> d60a0bd2d7d88148894085b59dd1910f818f7271:src/routes/index.js
