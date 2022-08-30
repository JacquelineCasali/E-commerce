var users=require("../data/users.json");
users=users.data;
const usuarioController={
// read - ler / listar todos os usuarios pode filtrar eles
    index:(req,res)=>{
        // return 
        const usuarios=[
            {
                nome:"Roberto Silva",
                CPF:"123456879",
                telefonePrincipal: "",
                RG:"000000 SSP/PE",
                celular: "",
                email:"robertinho123@email.com",
                novoEmail: "123@email.com",
                ConfirmaçãoNovoEmail: "123@email.com"


            },
            
                ]
        return res
    //    .status(200)
       .render("usuario",{title:"Minha Conta",usuario:usuarios});

    },

 

// CRUD
// CREATE - Criar 
// read - ler 
// update-atualizar
// delete - deletar
// read - ler / listar todos os usuarios pode filtrar eles


// read - ler apenas um usuario
show:(req,res)=>{ 
    const { id }= req.params
    const result=users.find((user)=>{
       return user.id === parseInt(id);
     })

     if(!result){
        return res
        // .status(400) mensagem de erro
        .status(400)
        .json({message:"Nenhum Usuário Encontrado"})
    }
    return res .status(200)
    .json({data:result, message:"Usuario Encontrado"})
    
    
},
// CREATE - Criar um usuario
    store:(req,res)=>{ 
    const {nomeCompleto, CPF,telefonePrincipal, RG, celular,email,novoEmail,ConfirmaçãoNovoEmail
    }=req.body;
    // para validação
    // ! é negação 
    //  condicional ou
    if(!nomeCompleto|| !CPF ||!email ||!novoEmail ||!ConfirmaçãoNovoEmail){
    return res.status(404)
    .json({message:"Preencha todos os campos"})
    }
    users.push({
    // length pega a quantidade de usuarios e soma 1
    id:users.length + 1,
    nomeCompleto,
    CPF,
    telefonePrincipal,
    RG,
    celular,
    email,novoEmail,ConfirmaçãoNovoEmail
    })
     res.status(201).json({Messange: "Usúario Criado com Sucesso"});
},
// update-atualizar um usuario
    update:(req,res)=>{
    const {id}= req.params
    const {nomeCompleto, CPF,telefonePrincipal, RG, celular,email,novoEmail,ConfirmaçãoNovoEmail
    }=req.body;
    const result= users.find((users)=>
    users.id===parseInt(id));
    if(!result){
        return res
        .status(400)
        .json({message:"Nenhum usuário encontrado"})
    }
const newUser=result;
if(nomeCompleto) newUser.nomeCompleto=nomeCompleto;
if(CPF) newUser.CPF=CPF;
if(telefonePrincipal) newUser.telefonePrincipal=telefonePrincipal;
if(RG) newUser.RG=RG;
if(celular) newUser.celular=celular;
if(email) newUser.email=email;
if(novoEmail) newUser.novoEmail=novoEmail;
if(ConfirmaçãoNovoEmail) newUser.ConfirmaçãoNovoEmail=ConfirmaçãoNovoEmail;
return res.status(200).json({message:"Atualização realizada com sucesso"})
    
},
// delete - deletar um usuario
delete:(req,res)=>{ 
    const {id}= req.params;
    const result= users.findIndex((users)=>
    users.id===parseInt(id));
    if(result===-1){
        return res
        .status(400)
        .json({message:"Nenhum usuário encontrado"})
    }
users.splice(result,1);
return res
.status(200)
.json({message:"Usuario deletado com sucesso"})
},
save:(req,res)=>{
    const {id,name}= req.params;
    if(name){
        res.send(`Save ${id} e ${name}`);
    } else{
        res.send(`Save ${id}`);
    }
    }
};





module.exports=usuarioController;