const Sequelize= require("sequelize");
const configDB=require("../config/database");
const db=new Sequelize(configDB)

// const fs=require("fs")
// const path=require("path")
// const files=require("../helpers/files")
// const upload = require("../config/upload");

// const userJson=fs.readFileSync(

// path.join(__dirname,"..","data","users.json"),
//    "utf-8"
//  )
//  const users=JSON.parse(userJson);


// var users=require("../data/users.json");
// users=users.usuarios;
const meuscreditosController={

show: async(req,res)=>{
    const { id }= req.params

  try{
    const userResult= await db.query("SELECT * FROM  creditos WHERE id= :id",{
      replacements:{
        id:id
      },
      type:Sequelize.QueryTypes.SELECT,
    })
    
    console.log(userResult)
    if(userResult.length===0){
      throw Error ("Nenhum créditos encontrado")
    }
    return res.render("meuscreditos", { title: "Créditos", user:userResult[0] });
      }catch(error){
        console.log(error);
            res.render("error",{title:"Ops!",message: "Nenhum Crédito Encontrado",
    
        })
        
      }

    },
    
}

 module.exports=meuscreditosController;