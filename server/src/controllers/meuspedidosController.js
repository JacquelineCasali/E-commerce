const fs=require("fs")
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




const meuspedidos = {
    index: (req, res) => {

      
    return res.render("meuspedidos", { title: "Lista de usuários"});
  
  },


  show: (req, res) => {
    const { id } = req.params;
    const userResult = users.find((user) => user.id === parseInt(id));
    if (!userResult) {
      return res.render("error", {
        title: "Ops!",
        message: "Nenhum pedido encontrado",
      });
    }
const user ={
  ...userResult,
  avatar:files.base64Encode(uploads.path	 + userResult.avatar),
}


    return res.render("meuspedidos", { title: "Meus Pedidos", user });
  },
}

module.exports = meuspedidos;
