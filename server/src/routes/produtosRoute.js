const express = require('express');
const router = express.Router();
const produtosController = require("../controllers/produtosController");

router.get("/produtos", produtosController.index);
router.get('/produto/:id',produtosController.produtoDetalhe)
module.exports = router;
