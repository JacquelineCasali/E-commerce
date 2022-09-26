const Sequelize= require("sequelize");
const configDB=require("../config/database");
const db=new Sequelize(configDB)
const Enderecos= require("../models/Endereços")
// const fs=require("fs");
// const path=require("path")
// const files=require("../helpers/files")
// const upload = require("../config/upload");
// const database=require("../config/database")




const enderecoController={
    
      adicionarendereco: async (req,res)=>{
        return res
        .render("adicionarendereco",{title:"Adicionar Endereço"});
        
      },

// read - ler apenas um usuario

show: async (req,res)=>{ 
    const { id }= req.params
    try{
      const userResult= await db.query("SELECT * FROM  enderecos WHERE id= :id",{
      replacements:{
        id:id
      },
      type:Sequelize.QueryTypes.SELECT,
    })
    
    console.log(userResult)
    if(userResult.length===0){
      throw Error ("Nenhum endereços encontrado")
    }
    return res.render("enderecos", { title: "Endereços", user:userResult[0] });
      }catch(error){
        console.log(error);
            res.render("error",{title:"Ops!",message: "Nenhum endereços encontrado",
    
        })
        
      }


},



// CREATE - Criar um endereço
 
create: async(req,res)=>{
  const {rua, bairro, numero,cidade,cep,complemento}=req.body;
  try{
  //criando usuario 
    const userResult= await db.query("INSERT INTO enderecos(rua, bairro, numero,cidade,cep,complemento) VALUES (:rua, :bairro, :numero,:cidade,:cep,:complemento)",
    {
      // replacements substitui as variáveis 
      replacements:{
        rua, bairro, numero,cidade,cep,complemento
      },
      type:Sequelize.QueryTypes.INSERT,
    },
       
    ) 
console.log(userResult)

  return res.render("success", {
    title: "Endereço atualizado",
    message: "Endereço cadastrado com sucesso",
  });
  }catch (error){
    console.log(error);
    return res.render("error",
    {title:"Ops!",message: "Error ao criar Endereço",
   
     }
)}
},
  
  // update-atualizar um endereco
edit:async(req,res)=>{
  // const {rua, bairro, numero,cidade,cep,complemento}=req.body;
  const {id}= req.params;
  try{
    
// const userResult= await db.query(" SELECT * FROM enderecos INNER JOIN users ON enderecos.id =enderecos.user_id",{
   const userResult= await db.query("SELECT * FROM  enderecos WHERE id= :id",{
      replacements:{
        id:id
      },
      type:Sequelize.QueryTypes.SELECT,
    })

     console.log(userResult)
      return res.render("editarendereco", {
        title: "Editar Endereço",
        user:userResult[0]
              })
    } catch(error){
      console.log(error);
      return res.render("error",
      {title:"Ops!",message: "Nenhum Endereço encontrado",
     
       })
    }
   
    },
   

  update :async (req,res)=>{
        const {id}= req.params;
        const {rua, bairro, numero,cidade,cep,complemento}=req.body;
          
      try{

    if(!rua && !bairro && !numero &&!cidade &&!cep && complemento)  {
      throw Error ("Nenhum dado para atualizar");
          }
          
const users = await Enderecos.update(
  {rua, bairro, numero,cidade,cep,complemento},
  {
    WHERE:{ id },
  });
 // foto
  // let filename;
  // if(req.file){
  //   filename=req.file.filename;
  // }
console.log(users);
//res.send();

 res.render("success", {
        title: "Endereço atualizado",
       message: "Endereço atualizado com sucesso",
     });

      }catch (error){
    console.log(error);
    return res.render("error",
    {title:"Ops!",message: "Error ao editar Endereço",
   
     }
)}
      
  },
  // delete - deletar um usuario
  delete:async (req,res)=>{ 
          const {id} = req.params;
          try{
    const userResult= await db.query("SELECT * FROM  enderecos WHERE id= :id",{
  replacements:{
    id:id
            },
            type:Sequelize.QueryTypes.SELECT,
          })
      
            
            console.log(userResult)
            return res.render("deletarenderecos", {
              title: "Deletar Endereço",
              user:userResult[0]
                    })
          } catch(error){
            console.log(error);
            return res.render("error",
            {title:"Ops!",message: "Nenhum Endereço encontrado",
           
             })
          }
         
          },
         


  
          destroy: async(req,res)=>{
  const {id}=req.params;

  try{
    const users = await Enderecos.destroy({where: {id}})
    console.log(users)
    return res.render("success",{
      title:"Endereço deletado",
      message: "Endereço deletado com sucesso!"
    })
  } catch(error){
    console.log(error);
    return res.render("error",
    {title:"Ops!",message: "Error ao deletar Endereço",
   
     })
  }
   
  },
  }
  
  
  
  
  
  







module.exports=enderecoController;
