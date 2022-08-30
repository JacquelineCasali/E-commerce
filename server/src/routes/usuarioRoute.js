var express = require('express');
var router = express.Router();
var usuarioController=require("../controllers/usuarioController")
var meuscreditosController=require("../controllers/meuscreditosController")
var enderecoController=require("../controllers/enderecoController")
var cartoesController=require("../controllers/cartoesController")


// get pegar dados, ou seja leitura 
// post - cadastrar /salvar dados 
// patch/put -atualizar dados
// delete - deletar dados 
router.get("/",usuarioController.index);
router.get("/meuscreditos",meuscreditosController.index);
router.get("/meuspedidos",meuscreditosController.meuspedidos);
router.get("/endereco",enderecoController.endereco);
router.get("/endereco/adicionarendereco",enderecoController.index);
router.get("/cartoes",cartoesController.cartoes);
router.get("/cartoes/adicionarcartoes",cartoesController.index);

router.get("/:id",usuarioController.show);
router.get("/cartoes/:id",cartoesController.show);
router.get( "/endereco/:id",enderecoController.show);



router.post("/cartoes/adicionarcartoes",cartoesController.store);
router.post("/endereco/adicionarendereco",enderecoController.store);


router.patch("/:id",usuarioController.update);
router.patch("/cartoes/adicionarcartoes/:id",cartoesController.update);
router.patch("/endereco/adicionarendereco/:id",enderecoController.update);



router.put("/:id",usuarioController.update);
router.put("/cartoes/adicionarcartoes/:id",cartoesController.update);
router.put("/endereco/adicionarendereco/:id",enderecoController.update);


router.delete("/:id",usuarioController.delete);
router.delete("/cartoes/adicionarcartoes/:id",cartoesController.delete);
router.delete("/endereco/adicionarendereco/:id",enderecoController.delete);








module.exports = router;
