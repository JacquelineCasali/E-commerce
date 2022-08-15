const express = require('express');
const router = express.Router();
const produtoController=require("../controllers/produtoController");

router.get('/produto/:slug', produtoController.index);

module.exports = router;