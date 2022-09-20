const fs=require("fs")
const path=require("path")
const files=require("../helpers/files")
const uploads = require("../config/uploads");

const userJson=fs.readFileSync(

path.join(__dirname,"..","data","users.json"),
   "utf-8"
 )
 const users=JSON.parse(userJson);


// var users=require("../data/users.json");
// users=users.usuarios;
const meuscreditosController={

    index:(req,res)=>{
    return res.render("meuscreditos",{title:"Meus Créditos"});
         
    },

show:(req,res)=>{
    const { id }= req.params
    const userResult=users.find((user)=>{
       return user.id === parseInt(id);
     })

     if(!userResult){
        return res 
        .send("Meus Créditos não encontrado")
     }

     const user ={
        ...userResult,
        avatar:files.base64Encode(uploads.path + userResult.avatar),
      }


     
        return res 
        .render("meuscreditos",{title:"Visualizar Pedidos",
        user} )
},


}
    
  

 module.exports=meuscreditosController;
 

