const loginController={
    login:(req,res)=>{
        return res.render("login");    
    }, 
    logout:(req,res)=>{
        return res.redirect("home");    
    }, 
}

module.exports = loginController;