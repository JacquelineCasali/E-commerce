const usuarioController={
    usuario:(req,res)=>{
       return res.render("usuario");
        
},

finalizacao:(req,res)=>{
    return res.render("finalizacao");
},

sucesso:(req,res)=>{
    return res.render("sucesso");
},

// deletarUsuario:(req,res)=>{
//     const {id} = req.params;
//     res.send("Deletando Usuario com id: " +id)
// }

}

module.exports=usuarioController;