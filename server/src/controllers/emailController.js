var users=require("../data/users.json");
users=users.usuarios;
const emailController={

// show:(req,res)=>{
//     const {id}=req.params;
//     const userResult=users.find(user=>user.id===parseInt(id));
//     if(!userResult){
//         return res 
//         .render("Email não entcontrado")
//      }
//         return res 
   
//         .render("editaremail",{title:"Editar Email",
//         user:userResult} )
// },
edit:(req,res)=>{
    const {id} = req.params;
    const userResult = users.find((user) => user.id === parseInt(id))
    if (!userResult){
        return res.render("error", {
            title: "Ops!",
            message: "Nenhum Email encontrado",
          });
            
    }
    return res.render("editaremail", {
        title: "Editar Email",
        user: userResult,
      });
    },
    
    
    // update-atualizar um endereco
        update:(req,res)=>{
        const {id}= req.params
        const {email, novoEmail,confirmaçãoEmail}=req.body;
        const userResult= users.find((users)=>
        users.id===parseInt(id));
        if (!userResult){
            return res.render("error", {
                title: "Ops!",
                message: "Nenhum E-mail encontrado",
              });
            }
    const newUser=userResult;
    if(email) newUser.email=email;
    if(novoEmail) newUser.novoEmail=novoEmail;
    if(confirmaçãoEmail) newUser.confirmaçãoEmail=confirmaçãoEmail;
    return res.render("success", {
        title: "Email atualizado",
        message: `Email ${newUser.email} atualizado com sucesso`,
      });
    },
    






}
    
  





 module.exports=emailController;
 

