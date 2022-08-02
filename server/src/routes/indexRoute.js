const express = require('express');
const router = express.Router();
const indexController=require("../controllers/indexController")
const usuarioController=require("../controllers/paymentController")

router.get("/",indexController.home)

module.exports = router;
