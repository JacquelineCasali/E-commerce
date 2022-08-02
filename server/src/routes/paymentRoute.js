const express = require('express');
const router = express.Router();
const paymentController=require("../controllers/paymentController")

router.get("/",paymentController.finalizacao)
router.get("/sucesso",paymentController.sucesso)

module.exports = router;
