const express = require('express');
const router = express.Router();

const adminProductsController=require("../controllers/adminProductsController");

router.get("/", adminProductsController.adminHome)
router.get("/criar", adminProductsController.adminCriar)

module.exports = router;