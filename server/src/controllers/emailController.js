const fs=require("fs");
const path=require("path")
const files=require("../helpers/files")
const uploads = require("../config/uploads");


// var users=require("../data/users.json");
// users=users.usuarios;
const userJson=fs.readFileSync(

  path.join(__dirname,"..","data","users.json"),
  "utf-8"
)
const users=JSON.parse(userJson);


const emailController={

edit:(req,res)=>{
  // console.log(req.session.email)
    const {id} = req.params;
    const userResult = users.find((user) => user.id === parseInt(id))
    if (!userResult){
        return res.render("error", {
            title: "Ops!",
            message: "Nenhum Email encontrado",
          });
        }
        const user ={
          ...userResult,
          avatar:files.base64Encode(uploads.path + userResult.avatar),
        }  

   
    return res.render("editaremail", {
        title: "Editar Email",
        user
      });
    },
    
    
    // update-atualizar um endereco
        update:(req,res)=>{
        const {id}= req.params
        const {email, novoEmail,confirmaçãoEmail}=req.body;
        const userResult= users.find((user)=>
        user.id===parseInt(id));
        if (!userResult){
            return res.render("error", {
                title: "Ops!",
                message: "Nenhum E-mail encontrado",
              });
            }

         
            
    const updateUser=userResult;
    if(email) updateUser.email=email;
    if(novoEmail) updateUser.confirmaçãoEmail=novoEmail;
    if(confirmaçãoEmail) updateUser.confirmaçãoEmail=confirmaçãoEmail;
    fs.writeFileSync(
      path.join(__dirname,"..","data","users.json"),
      // conteudo do novo arquivo convertendo o array em string
      JSON.stringify(users)
      );
    
    // req.session.email=updateUser.email
    return res.render("success", {
        title: "Email atualizado",
        message: `Email do usuário ${updateUser.nome} atualizado com sucesso`,
      });
    },
    






}
    
  





 module.exports=emailController;
 

