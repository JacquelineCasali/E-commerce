const UsersController={
    criarUsuario:(req,res)=>{
        res.send("Usuario");
},
deletarUsuario:(req,res)=>{
    const {id} = req.params;
    res.send("Deletando Usuario com id: " +id)
}

}

module.exports=UsersController;

