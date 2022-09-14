var users=require("../data/users.json");
users=users.usuarios;
const cartoesController={
    cartoes:(req,res)=>{
        return res.render("cartoes",{title:"Meus Cartões",users});
         
 },

index:(req,res)=>{
    return res.render("adicionarcartoes",{title:"Adicionar Cartoes",users});
     
},

show:(req,res)=>{ 

    const { id }= req.params
    const userResult=users.find((user)=>{
       return user.id === parseInt(id);
     })

     if(!userResult){
        return res 
        .send("Cartão não entcontrado")
     }
     return res 
     .status(400)
     .render("cartoes",{title:"Visualizar Endereço",
     user:userResult} )
     
    
    
},

create:(req,res)=>{

    return res.render("adicionarcartoes",{title:"Cadastrar Cartão"})
    
    },

// CREATE - Criar um usuario
store:(req,res)=>{ 
    const {nome, cpf,telefonePrincipal, cvc,cartao}=req.body;
    // para validação
    // ! é negação 
    //  condicional ou
    if(!nome|| !cpf || telefonePrincipal ||!cvc ||!cartao){
        return res.render ("adicionarcartoes",{
            title:"Cadastrar Cartões",
            error:{
            message:"Preencha todos os campos!",}
    
        })
    }
    users.push({
    // length pega a quantidade de usuarios e soma 1
    id:users.length + 1,
    nome, cpf, telefonePrincipal,  cvc,  cartao  
     })
    
     return res.render("Success",{
        title:"Cartão Cadastrado",
        message:"Cartão Cadastrado com Sucesso",
    })

    },
// editar
edit:(req,res)=>{
const {id}=req.params;
const userResult=users.find((user)=>user.id===parseInt(id));
if(!userResult){
    return res.render ("error",{
        title:"Ops!",
        message:"Nenhum Cartão encontrado",
    });
}
return res.render("editarcartoes",{
    title: "Editar Cartão",
    user:userResult,
})
},


// update-atualizar um usuario
    update:(req,res)=>{
      const {id}= req.params
    const {nome, cpf,telefonePrincipal, cvc,cartao
    }=req.body;
    const userResult= users.find((user)=>
    user.id===parseInt(id));
    if(!userResult){
    return res.render ("error",{
     title:"Ops!",
     message:"Nenhum Cartão encontrado",
        });

    }
const newUser=userResult;
if(nome) newUser.nome=nome;
if(cpf) newUser.cpf=cpf;
if(telefonePrincipal) newUser.telefonePrincipal=telefonePrincipal;
if(cvc) newUser.cvc=cvc;
if(cartao) newUser.cartao=cartao;
return res.render("success", {
    title: "Cartão atualizado",
    message: `Cartão ${newUser.nome} atualizado com sucesso`,
  });    
},
// delete - deletar um cartão

// delete - deletar um usuario
delete:(req,res)=>{ 
    const {id} = req.params;
    const userResult = users.find((user) => user.id === parseInt(id))
    if (!userResult){
        return res.render("error", {
            title: "Ops!",
            message: "Nenhum Cartão encontrado",
          });
            
    }
    return res.render("deletarcartao", {
        title: "Deletar Cartão",
        user: userResult,
      });
    },
     

    destroy:(req,res)=>{
    const { id } = req.params;
    const userResult =users.findIndex((user)=>user.id===parseInt(id))
if(userResult === -1){
  

    return res.render("error", {
        title: "Ops!",
        message: "Nenhum Cartão Cadastrado",
      });
}

users.splice(userResult,1)

return res.render("success",{
  title:"Usuário deletado",
  message: "Cartão deletado com sucesso!"
})
}
    }






module.exports=cartoesController;
