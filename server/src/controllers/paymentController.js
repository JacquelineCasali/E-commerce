const paymentController={
    finalizacao:(req,res)=>{
        return res.render("finalizacao");
    },
    
    sucesso:(req,res)=>{
        return res.render("sucesso");
    },
    }
    
    module.exports = paymentController;