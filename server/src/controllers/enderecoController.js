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


const enderecoController={
    endereco:(req,res)=>{
          
        return res.render("enderecos",
        {title:"Endereço"});
      },
    
      adicionarendereco:(req,res)=>{
        return res
        .render("adicionarendereco",{title:"Adicionar Endereço",users});
        
      },

// read - ler apenas um usuario
show:(req,res)=>{ 
  
  const { id }= req.params
    const userResult=users.find((user)=>{
       return user.id === parseInt(id);
     })

     if(!userResult){
        return res.render("enderecos", {
            title: "Ops!",
            message: "Nenhum Endereço encontrado",
          });
        }
        const user ={
  ...userResult,
   avatar:files.base64Encode(uploads.path + userResult.avatar),
          }

    return res 
    .status(400)
    .render("enderecos",{title:"Visualizar Endereço",
    user} )
    
},



// CREATE - Criar um endereço
   
create:(req,res)=>{ 
   const {nome, cep,rua, bairro, cidade,numero,complemento}=req.body;
  
  const newUser={
      nome, 
      cep,
      rua, 
      bairro, 
      cidade,
      numero,
      complemento,
      // avatar:filename,
    
  }

  const newId=users[users.length -1].id +1;
  newUser.criadoEm=new Date(),
  newUser.modificadoEm=new Date(),
  newUser.admin=false;
  newUser.id=newId
  users.push(newUser)

  // atualizar o arquivo 
// caminho do arquivo
  fs.writeFileSync(
    path.join(__dirname,"..","data","users.json"),
JSON.stringify(users)
  )
         return res.render("Success",{
          title:"Endereço criado",
          message:"Endereço Criado com Sucesso",
      })   

     
},
edit:(req,res)=>{
const {id} = req.params;
const userResult = users.find((user) => user.id === parseInt(id))
if (!userResult){
    return res.render("error", {
        title: "Ops!",
        message: "Nenhum Endereço encontrado",
      });
    }
      const user ={
        ...userResult,
        avatar:files.base64Encode(uploads.path + userResult.avatar),
      }  


return res.render("editarendereco", {
    title: "Editar Endereço",
    user
  });
},


// update-atualizar um endereco
    update:(req,res)=>{
    const {id}= req.params
    const {nome, cep,rua, bairro, cidade,numero,complemento}=req.body;
    const userResult= users.find((user)=>
    user.id===parseInt(id));

    let filename;
    if(req.file){
      filename=req.file.filename;
    }
    if (!userResult){
        return res.render("error", {
            title: "Ops!",
            message: "Nenhum Endereço encontrado",
          });
        }

        
const updateUser=userResult;
if(nome) updateUser.nome=nome;
if(cep) updateUser.cep=cep;
if(rua) updateUser.rua=rua;
if(bairro) updateUser.bairro=bairro;
if(cidade) updateUser.cidade=cidade;
if(numero) updateUser.numero=numero;
if(complemento) updateUser.complemento=complemento;
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
    title: "Endereço atualizado",
    message: `Endereço do usuário ${updateUser.nome} atualizado com sucesso`,
  });
},
// delete - deletar um usuario
delete:(req,res)=>{ 
        const {id} = req.params;
        const userResult = users.find((user) => user.id === parseInt(id))
        if (!userResult){
            return res.render("error", {
                title: "Ops!",
                message: "Nenhum Endereço encontrado",
              });
                
        }
        const user ={
            ...userResult,
            avatar:files.base64Encode(uploads.path+ userResult.avatar),
          }
        return res.render("deletarenderecos", {
            title: "Deletar Endereço",
            user
          });
        },
         

        destroy:(req,res)=>{
const {id}=req.params;
const userResult =users.findIndex((user)=>user.id===parseInt(id))
if(userResult === -1){
    return res.render("error", {
        title: "Ops!",
        message: "Nenhum Endereço Cadastrado",
      });
}  




users.splice(userResult,1)
return res.render("success",{
    title:"Endereço deletado",
    message: "Endereço deletado com sucesso!"
  })

},
}








module.exports=enderecoController;
