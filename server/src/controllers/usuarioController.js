const Sequelize= require("sequelize");
const configDB=require("../config/database");
const db=new Sequelize(configDB)
const User=require("../models/User")
// const db = require("../config/sequelize");

const userController = {
  index: async (req, res) => {
    try{
    let query = "SELECT * FROM users"
    const users =await db.query(query,{
      type:Sequelize.QueryTypes.SELECT,
         });
        // console.log(users);
        return res.render("usuarios", { title: "Lista de usuários", users});
         //res.status(200).json({data:users,message:"Busca realizada com sucesso"})
        } catch(error){
          console.log(error);
         res.status(400).json({message:"Erro na busca de usuários"});
         
        }
      },
 show: async (req,res)=>{
  const {id}=req.params;
    try{
// const users= await db.query(`SELECT * FROM  users WHERE id= %{id}`,{
//   type:Sequelize.QueryTypes.SELECT,
// })



const userResult= await db.query("SELECT * FROM  users WHERE id= :id",{
  replacements:{
    id:id
  },
  type:Sequelize.QueryTypes.SELECT,
})

console.log(userResult)
if(userResult.length===0){
  throw Error ("Nenhum usuário encontrado")
}
return res.render("usuario", { title: "Usuário", user:userResult[0] });
  }catch(error){
    console.log(error);
        res.render("error",{title:"Ops!",message: "Nenhum usuário encontrado",

    })
    
  }
        
  },
 
update: async(req,res)=>{
    const {id}= req.params;
     const {nome,cpf,celular,nascimento,email, is_admin,sexo,rg,telefone,receber,instagram}=req.body;
     try {

if(!nome &&  !cpf && !celular  && ! nascimento  && ! email  && !is_admin && !sexo && !rg && !telefone && !receber && !instagram ){
        throw Error ("Nenhum dado para atualizar");
      }
      //atualizar usuario de forma dinâmica 
  let query= "UPDATE users SET ";
    
  if(nome) query += "nome = :nome";
  if(cpf) {
    if(nome) query += ", ";
    query += "cpf = :cpf";
  }
  if(celular) {
    if(nome || cpf ) query += ", ";
    query += "celular=:celular";
  }
  if(nascimento){
    if(nome || cpf || celular) query += ", ";

    query += "nascimento = :nascimento";
  } 
  if(email){
    if(nome || cpf  || celular|| nascimento ) query += ", ";
    query += "email = :email";
  } 

  if(is_admin){
    if(nome || cpf || celular|| nascimento || email ) query += ", ";
    query += "is_admin = :is_admin";

  }

  if(sexo){
    if(nome || cpf ||celular || nascimento || email || is_admin ) query += ", ";
    query += "sexo = :sexo";

  }
  
  if(rg){
    if(nome || cpf  ||celular || nascimento || email || is_admin ||sexo) query += ", ";
    query += "rg = :rg";
  }
  if(telefone){
    if(nome || cpf ||celular ||nascimento || email || is_admin ||sexo || rg) query += ", ";
    query += "telefone = :telefone";
  }

  if(receber){
    if(nome || cpf  ||celular || nascimento || email || is_admin ||sexo || rg ||telefone ) query += ", ";
    query += "receber = :receber";
  }
  
  if(instagram){
    if(nome || cpf  ||celular || nascimento || email || is_admin ||sexo || rg ||telefone || receber  ) query += ", ";
    query += "instagram = :instagram";
  }
  query += " WHERE id= :id";

  const users= await db.query(query,
 {
  replacements:{
    nome,cpf,celular,nascimento,email,is_admin,sexo,rg,telefone,receber,instagram,id,
  },
  type:Sequelize.QueryTypes.UPDATE,
 } );
console.log(users);
//res.send();

 res.render("success", {
        title: "Usuário atualizado",
       message: `Usuário atualizado com sucesso`,
     });
}catch(error){
      console.log(error);
      res.render("error",{title:"Ops!",message: "Error ao atualizar usuário"})
   
     }
},
  }


module.exports = userController;