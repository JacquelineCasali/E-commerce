const express = require('express');
const router = express.Router();
const produtoController=require("../controllers/produtoController");


router.get('/',produtoController.index)

module.exports =router;