const Sequelize= require("sequelize");
const configDB=require("../config/database");
const Emailsenha=require("../models/Emailsenha")
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
  
     const userResult= await db.query("SELECT * FROM  emailsenha WHERE id= :id",{
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
        {title:"Ops!",message: "Senha não Cadastrada",
       
         })
      }
     
      },

      
      update: async (req,res)=>{
        const {id}= req.params
        const {novasenha,confirmesenha}=req.body;
        try{
       
          const users = await Emailsenha.update(
            {
              novasenha: bcrypt.generateHash(novasenha),
              confirmesenha: bcrypt.generateHash(confirmesenha),
              
              },
            {
              where:{ id },
            });
                              
           console.log(users);
            //res.send();
           
            res.render("success", {
              title: "Senha atualizado",
        message: `Senha atualizado com sucesso`,
               });
            
                }catch (error){
              console.log(error);
              return res.render("error",{
              title: "Ops!",
              message: "Nenhuma Senha Cadastrada",
             
               }
            )}
                
            },

    
//    auth:(req,res)=>{
//     const usersJson=fs.readFileSync(
//       path.join(__dirname,"..","data","users.json"),
//       "utf-8"
//   );
  
//   const users=JSON.parse(usersJson)
//   const { novasenha,confirmesenha }=req.body;
//   const userAuth = users.find(user=>{
//     // === igual 
//     if(user.novasenha===confirmesenha){
// // comparando a senha com a senha criptografia
//         if(bcrypt.compareHash(novasenha,user.novasenha)){
//     return true;
// }
//     }

// })

// if(!userAuth){
//     return res.render("editarsenha",{
//         title:"Editar Senha",
//         error:{
//             message:"Senha inválida"
//         }
//     })
// }  
//    } 
}
    
  





 module.exports=senhaController;
 

