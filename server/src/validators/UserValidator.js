const userValidator={
  enderecoValidator:(req,res,next)=>{
 const {nome, cep,rua, bairro, cidade,numero,complemento}=req.body;

 
 console.log("entrei no validador")
 if(!nome||
  !cep|| 
  !rua|| 
  !bairro|| 
  ! cidade|| 
  !numero|| 
  complemento ){

  return res.render ("adicionarendereco",{
        title:"Cadastrar Endereço",
        error:{
        message:"Preencha todos os campos!",}

    })
}



  next();
  },
  
    
  cartaoValidator:(req,res,next)=>{
const {nome,numero, cvc,data, cpf,telefone}=req.body;
 
if(!nome||
  !numero||
  !cvc||
  data||
  !cpf || 
  telefone
   
  ){
   return res.render ("adicionarcartoes",{
       title:"Cadastrar Cartões",
       error:{
       message:"Preencha todos os campos!",}

   })
}
        
       next();
       }
       }
       


  module.exports=userValidator