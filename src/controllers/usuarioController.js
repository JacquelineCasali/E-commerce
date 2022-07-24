const usuarioController={
    index:(req,res)=>{
       return res.render("usuario");
},
// deletarUsuario:(req,res)=>{
//     const {id} = req.params;
//     res.send("Deletando Usuario com id: " +id)
// }

}

module.exports=usuarioController;