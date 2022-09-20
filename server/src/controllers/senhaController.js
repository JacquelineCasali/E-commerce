const fs=require("fs");
const path=require("path")
const files=require("../helpers/files")
const bcrypt=require("../helpers/bcrypt")


const userJson=fs.readFileSync(

  path.join(__dirname,"..","data","users.json"),
  "utf-8"
)
const users=JSON.parse(userJson);

const senhaController={


edit:(req,res)=>{
    const {id} = req.params;
    const userResult = users.find((user) => user.id === parseInt(id))
    if (!userResult){
        return res.render("error", {
            title: "Ops!",
            message: "Nenhuma Senha Cadastrada",
          });
            
    }

    const user ={
      ...userResult,
      avatar:files.base64Encode(__dirname + "/../../uploads/" + userResult.avatar),
    }
    return res.render("editarsenha", {
        title: "Alterar Senha",
        user
      });
    },
    
    
    // update-atualizar um endereco
        update:(req,res)=>{
        const {id}= req.params
        const {senha, nova_senha,confirmar_senha}=req.body;
        const userResult= users.find((users)=>
        users.id===parseInt(id));
        if (!userResult){
            return res.render("error", {
                title: "Ops!",
                message: "Nenhuma Senha Cadastrada",
              });
            }
            if(nova_senha !== confirmar_senha){
              return res.render("register",{
                  title:"Cadastro",
                  error:{
                      message:"Senha não coincidem",}
              });
          }  



    const updateUser=userResult;
    if(senha) updateUser.senha=senha.bcrypt.generateHash(senha);
    if(nova_senha) updateUser.nova_senha.bcrypt.generateHash(nova_senha)=nova_senha;
    

 

    fs.writeFileSync(
      path.join(__dirname,"..","data","users.json"),
      // conteudo do novo arquivo convertendo o array em string
      JSON.stringify(users)
      );
    
    return res.render("success", {
        title: "Senha atualizada",
        message: `Senha atualizada com sucesso`,
      });
    },
   auth:(req,res)=>{
    const usersJson=fs.readFileSync(
      path.join(__dirname,"..","data","users.json"),
      "utf-8"
  );
  
  const users=JSON.parse(usersJson)
  const { nova_senha,confirmar_senha }=req.body;
  const userAuth = users.find(user=>{
    // === igual 
    if(user.nova_senha===confirmar_senha){
// comparando a senha com a senha criptografia
        if(bcrypt.compareHash(nova_senha,user.nova_senha)){
    return true;
}
    }

})

if(!userAuth){
    return res.render("editarsenha",{
        title:"Editar Senha",
        error:{
            message:"Senha inválida"
        }
    })
}  
   } 






}
    
  





 module.exports=senhaController;
 

