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

const userController = {
  index: (req, res) => {
    return res.render("usuarios", { title: "Lista de usuários", users});
  },


  show: (req, res) => {
    const { id } = req.params;
    const userResult = users.find((user) => user.id === parseInt(id));
    if (!userResult) {
      return res.render("error", {
        title: "Ops!",
        message: "Nenhum usuário encontrado",
      });
    }
const user ={
  ...userResult,
  avatar:files.base64Encode(uploads.path + userResult.avatar),
}


return res.render("usuario", { title: "Usuário", user });
  },

  edit:(req,res)=>{
   
    const {id} = req.params;
    const userResult = users.find((user) => user.id === parseInt(id))
    if (!userResult){
        return res.render("error", {
            title: "Ops!",
            message: "Nenhum Usuário encontrado",
          });
        }
        const user ={
          ...userResult,
          avatar:files.base64Encode(uploads.path + userResult.avatar),
        }  

   
    return res.render("usuario", {
        title: "Editar Usuário",
        user
      });
    },
    
    
    // update-atualizar um endereco
        update:(req,res)=>{
          res.clearCookie("user")
          const {id}= req.params
        const {nome, cpf,telefonePrincipal,rg ,celular, sexo, nascimento,instagram,receber }=req.body;
        const userResult= users.find((user)=>
        user.id===parseInt(id));

        let filename;
        if(req.file){
          filename=req.file.filename;
        }
          if (!userResult){
            return res.render("error", {
                title: "Ops!",
                message: "Nenhum Usuário encontrado",
              });
            }
    const updateUser=userResult;
    if(nome) updateUser.nome=nome;
    if(cpf) updateUser.cpf=cpf;
    if(telefonePrincipal) updateUser.telefonePrincipal=telefonePrincipal;
    if(rg) updateUser.rg=rg;
    if(celular) updateUser.celular=celular;
    if(sexo) updateUser.sexo=sexo;
    if(nascimento) updateUser.nascimento=nascimento;
    if(instagram) updateUser.instagram=instagram;
    if(receber) updateUser.receber=receber;
    if(filename) 
    {
      let avatarTmp = updateUser.avatar;
      fs.unlinkSync(upload.path +  avatarTmp);
        updateUser.avatar=filename;
    }
    fs.writeFileSync(
      path.join(__dirname,"..","data","users.json"),
      // conteudo que sera salvo no arquivo
      JSON.stringify(users)
      );


      const user=JSON.parse(
        JSON.stringify(updateUser,[
         "id",
          "nome",
          "telefonePrincipal", 
          "cartao" ,
          "email",
          "cidade",
          "bairro",
          "pedido",
          "sexo",
          "celular",
          "numero",
          "status"
          
        ])
      )
     
      res.cookie("user",user)
      
    
      


    return res.render("success", {
        title: "Usuário atualizado",
        message: `Usuário ${updateUser.nome} atualizado com sucesso`,
      });
    },
    







}




module.exports = userController;