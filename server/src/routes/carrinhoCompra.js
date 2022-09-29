const express=require('express')
const router = express.Router()
const carrinhoCompraController = require('../controllers/carrinhoCompraController')

router.post('/api/carrinho/comprar', carrinhoCompraController.save);
router.post('/api/carrinho/comprar', async (req, res) => {
    const retorno = req.body;
    console.log('CHEGUEI: ',  req.body);
    return res.json("retorno api = " +retorno);
})

module.exports = router