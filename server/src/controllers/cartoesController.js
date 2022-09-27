const Sequelize= require("sequelize");
const configDB=require("../config/database");
const db=new Sequelize(configDB);
const cartoes=require("../models/cartoes");


const fs=require("fs")
const path=require("path")
// const files=require("../helpers/files");
// const uploads = require("../config/uploads");
const bcrypt=require("../helpers/bcrypt");


const cartoesController={
 show:async (req,res)=>{ 
  const { id }= req.params
  try{
      const userResult= await db.query("SELECT * FROM  cartoes WHERE id= :id",{
    replacements:{
      id:id
    },
    type:Sequelize.QueryTypes.SELECT,
  })
  
  console.log(userResult)
  if(userResult.length===0){
    throw Error ("Nenhum Cartão encontrado")
  }
  return res.render("cartoes", { title: "Cartões", user:userResult[0] });
    }catch(error){
      console.log(error);
          res.render("error",{title:"Ops!",message: "Nenhum cartão encontrado",
  
      })
      
    }


},
    


adicionarcartoes:(req,res)=>{
  return res.render("adicionarcartoes",{title:"Adicionar Cartoes"});
   
},

create: async(req,res)=>{
   const {nome,numero, cvc, data, cpf, telefone}=req.body;
  try{
    
    const users= await cartoes.create({
      nome,
      numero, 
      cvc:bcrypt.generateHash(cvc), 
      data,
      cpf,
     telefone,
    });
    console.log(users)
      //res.status(201).json({message:"Cartão Cadastrado com Sucesso"})
     
      return res.render("success", {
        title: "Cartão atualizado",
        message: "Cartão cadastrado com sucesso",
      });

    }catch(error){
      console.log(error);
     return res.render("error",
    {title:"Ops!",message: "Error ao criar Cartão",
       })
   }
        },

  


  auth:(req,res)=>{
    const usersJson=fs.readFileSync(
      path.join(__dirname,"..","data","ecommerce.sql"),
      "utf-8"
  );
  
  const users=JSON.parse(usersJson)
  const {cvc}=req.body;
  const userAuth = users.find(user=>{
    if(bcrypt.compareHash(cvc,user.cvc)){
      return true;
    }
  })

if(!userAuth){
  return res.render ("adicionarcartoes",{
    title:"Adicionar Cartão",
    error:{
      message:"Cvc Invalido"
    }
  })
}


  },

// editar
edit:async(req,res)=>{
  // const {rua, bairro, numero,cidade,cep,complemento}=req.body;
  const {id}= req.params;
  try{
    
// const userResult= await db.query(" SELECT * FROM enderecos INNER JOIN users ON enderecos.id =enderecos.user_id",{
   const userResult= await db.query("SELECT * FROM  cartoes WHERE id= :id",{
      replacements:{
        id:id
      },
      type:Sequelize.QueryTypes.SELECT,
    })

     console.log(userResult)
      return res.render("editarcartoes", {
        title: "Editar Cartão",
        user:userResult[0]
              })
    } catch(error){
      console.log(error);
      return res.render("error",
      {title:"Ops!",message: "Nenhum Cartão Cadastrado",
     
       })
    }
   
    },
   

    update :async (req,res)=>{
      const {id}= req.params;
      const {nome, cpf,telefone, cvc,cartao }=req.body;
        
    try{

  // if(!rua && !bairro && !numero &&!cidade &&!cep && complemento)  {
  //   throw Error ("Nenhum dado para atualizar");
  //       }
        
const users = await cartoes.update(
{nome,
   cpf,
   telefone,
   cvc:bcrypt.generateHash(cvc),
    cartao},
{
  where:{ id },
});
console.log(users);


res.render("success", {
      title: "Cartão atualizado",
     message: "Cartão atualizado com sucesso",
   });

    }catch (error){
  console.log(error);
  return res.render("error",
  {title:"Ops!",message: "Error ao atualizar o cartão",
 
   }
)}
    
},


delete:async (req,res)=>{ 
  const {id} = req.params;
  try{
const userResult= await db.query("SELECT * FROM  cartoes WHERE id= :id",{
replacements:{
id:id
    },
    type:Sequelize.QueryTypes.SELECT,
  })

    
    console.log(userResult)
    return res.render("deletarcartao", {
      title: "Deletar Cartão",
      user:userResult[0]
            })
  } catch(error){
    console.log(error);
    return res.render("error",
    {title:"Ops!",message: "Nenhum Cartão encontrado",
   
     })
  }
 
  },
 
  destroy: async(req,res)=>{
    const {id}=req.params;
  
    try{
      const users = await cartoes.destroy({where: {id}})
      console.log(users)
      return res.render("success",{
        title:"Cartão deletado",
       message: "Cartão deletado com sucesso!"
      })
    } catch(error){
      console.log(error);
      return res.render("error",
      {title:"Ops!",message: "Nenhum Cartão Cadastrado",
     
       })
    }
     
    },
    }
    

module.exports=cartoesController;