var express = require('express');
var router = express.Router();
var usuarioController=require("../controllers/usuarioController")
<<<<<<< HEAD

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('usuario', { title: 'Express' });
});

router.get( "/usuario",usuarioController.usuario)
router.get("/finalizacao",usuarioController.finalizacao)
router.get("/sucesso",usuarioController.sucesso)
router.get("/home",usuarioController.home)
=======
var meuscreditosController=require("../controllers/meuscreditosController")
var enderecoController=require("../controllers/enderecoController")
var cartoesController=require("../controllers/cartoesController")
var meuspedidosController=require("../controllers/meuspedidosController")
var emailController=require("../controllers/emailController")
var senhaController=require("../controllers/senhaController")

// get pegar dados, ou seja leitura 
// post - cadastrar /salvar dados 
// patch/put -atualizar dados
// delete - deletar dados 
router.get("/",usuarioController.index);

router.get("/meuscreditos",meuscreditosController.index);
router.get("/meuspedidos",meuspedidosController.index);
router.get("/enderecos/",enderecoController.endereco);
router.get("/enderecos/adicionarendereco",enderecoController.index);
router.get("/cartoes",cartoesController.cartoes);
router.get("/cartoes/adicionarcartoes",cartoesController.index);

router.get("/:id",usuarioController.show);
router.get("/cartoes/:id",cartoesController.show);
router.get("/enderecos/:id",enderecoController.show);
router.get("/meuspedido/:id",meuspedidosController.show);
router.get("/meuscreditos/:id",meuscreditosController.show);
// criar 
router.get("/enderecos/adicionarendereco",enderecoController.create);
router.post('/enderecos/adicionarendereco',enderecoController.store)


router.get("/cartoes/adicionarcartoes",cartoesController.create);
router.post("/cartoes/adicionarcartoes",cartoesController.store);



// router.patch("/:id",usuarioController.update);



// editar
router.get("/cartoes/editarcartoes/:id",cartoesController.edit);
router.put("/cartoes/editarcartoes/:id",cartoesController.update);
router.patch("/cartoes/editarcartoes/:id",cartoesController.update);



router.put("/enderecos/editarendereco/:id",enderecoController.update);
router.patch("/enderecos/editarendereco/:id",enderecoController.update);
router.get("/enderecos/editarendereco/:id",enderecoController.edit);



router.get("/editaremail/:id",emailController.edit);
router.put("/editaremail/:id",emailController.update);
router.patch("/editaremail/:id",emailController.update);


router.get("/editarsenha/:id",senhaController.edit);
router.put("/editarsenha/:id",senhaController.update);
router.patch("/editarsenha/:id",senhaController.update);


// router.put("/:id",usuarioController.update);



// router.delete("/:id",usuarioController.delete);
router.get("/cartoes/deletarcartao/:id",cartoesController.delete);

router.delete("/cartoes/deletarcartao/:id",cartoesController.destroy);

// deletar
router.get("/enderecos/deletarenderecos/:id",enderecoController.delete);

router.delete("/enderecos/deletarenderecos/:id",enderecoController.destroy);




>>>>>>> 4c0831d1a46e5a31fb4c0a2ab8510a97b0ae79f2

module.exports = router;
