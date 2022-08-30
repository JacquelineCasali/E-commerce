// var creditos=require("../data/creditos.json")
// creditos=creditos.data;
const meuscreditosController={

    index:(req,res)=>{
        return res.render("meuscreditos",{title:"Meus Créditos"});
         
    },

    meuspedidos:(req,res)=>{
        return res.render("meuspedidos",{title:"Meus Pedidos"});
         
    },
}

 module.exports=meuscreditosController;
 

