const express = require('express');
const router = express.Router();

const adminProductsController=require("../controllers/adminProductsController");

router.get("/",adminProductsController.adminHome)

module.exports = router;