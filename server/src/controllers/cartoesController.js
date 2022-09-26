const Sequelize= require("sequelize");
const configDB=require("../config/database");
const db=new Sequelize(configDB);
const cartoes=require("../models/cartoes");


const fs=require("fs")
const path=require("path")
const files=require("../helpers/files");
const upload = require("../config/upload");
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
      res.status(201).json({message:"Cartão Cadastrado com Sucesso"})
        
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
   







// update-atualizar um usuario
    update:(req,res)=>{
     
     
      const {id}= req.params
    const {nome, cpf,telefonePrincipal, cvc,cartao
    }=req.body;
    const userResult= users.find((user)=>
    user.id===parseInt(id));
    let filename;
    if(req.file){
      filename=req.file.filename;
    }
    if(!userResult){
    return res.render ("error",{
     title:"Ops!",
     message:"Nenhum Cartão encontrado",
        });

    }
const updateUser=userResult;
if(nome) updateUser.nome=nome;
if(cpf) updateUser.cpf=cpf;
if(telefonePrincipal) updateUser.telefonePrincipal=telefonePrincipal;
// if(cvc) updateUser.cvc=cvc.bcrypt.generateHash(cvc);

if(cartao) updateUser.cartao=cartao;
if(filename) 
{
  let avatarTmp = updateUser.avatar;
  fs.unlinkSync(uploads.path +  avatarTmp);
    updateUser.avatar=filename;
}

fs.writeFileSync(
  path.join(__dirname,"..","data","users.json"),
  // conteudo que sera salvo no arquivo
  JSON.stringify(users)
  );
  
  
return res.render("success", {
    title: "Cartão atualizado",
    message: `Cartão ${updateUser.nome} atualizado com sucesso`,
  });
},
// delete - deletar um cartão

// delete - deletar um usuario

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