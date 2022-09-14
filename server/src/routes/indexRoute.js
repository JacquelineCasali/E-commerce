var express = require('express');
var router = express.Router();
var indexController=require("../controllers/indexController")


<<<<<<< HEAD
router.get( "/",indexController.home)
=======
router.get( "/",indexController.home);
>>>>>>> 4c0831d1a46e5a31fb4c0a2ab8510a97b0ae79f2


module.exports = router;
