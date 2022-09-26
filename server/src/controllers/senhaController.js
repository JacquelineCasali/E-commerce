const Sequelize= require("sequelize");
const configDB=require("../config/database");
const db=new Sequelize(configDB)
// const Enderecos= require("../models/Endereços")

const fs=require("fs");
const path=require("path")
const files=require("../helpers/files")
const bcrypt=require("../helpers/bcrypt")



const senhaController={



   
  edit:async(req,res)=>{
       const {id}= req.params;
    try{
  
     const userResult= await db.query("SELECT * FROM  users WHERE id= :id",{
        replacements:{
          id:id
        },
        type:Sequelize.QueryTypes.SELECT,
      })
  
       console.log(userResult)
        return res.render("editarsenha", {
          title: "Editar Senha",
          user:userResult[0]
                })
      } catch(error){
        console.log(error);
        return res.render("error",
        {title:"Ops!",message: "Nenhuma Senha Cadastrada",
       
         })
      }
     
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
 

