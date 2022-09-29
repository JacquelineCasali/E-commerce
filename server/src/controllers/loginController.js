const fs = require("fs");
const path = require("path");
const bcrypt = require("../helpers/bcrypt");
const User = require("../models/User");

const loginController = {
    login:(req, res) => {
        return res.render("login",{user: req.cookies.user,title:"Login"})
    },
    show:async(req,res)=>{
        const {id}=req.params 
        try{
            const userAuth = await User.findOne({
                where: {
                    id:id
                }
            });
       
    }catch (error) {
        console.log(error); 
        res.status(400).json({ message: "Erro na busca" });
      }
},


    auth: async (req, res) => {
        res.clearCookie("user");
        const { email, password } = req.body;
        try{
            const userAuth = await User.findOne({
                where: {
                    email:email
                }
            });
            
            res.redirect('/')
            
            if(!userAuth){
                throw Error("USER_NOT_FOUND");
            }

            const userSenha = bcrypt.compareHash(password, userAuth.senha)

            if(userSenha){
                const user = JSON.parse(
                    JSON.stringify(userAuth, ["id", "nome", "email"])
                  );
                  
                req.session.email = userAuth.email;
                req.session.nome = userAuth.nome;
                res.cookie("user", user);
               
                return res.redirect("/");
            }

            if(!userSenha){
                    res.render("login", {
                        error: "Usuário ou senha inválidos"
                    })
            }
            
        } catch (error) {
            
            if(error.message === "USER_NOT_FOUND"){
                console.log(error.message)
                res.render("login", {
                    error: "Usuário ou senha inválidos"
                })
            } else {
                console.log(error.message)
                res.render("login", {
                    error: "Usuário ou senha inválidos"
                })
  
            }
            
        }
    },   
    logout: (req,res)=>{
        req.session.destroy();
        res.clearCookie("user");
        res.redirect("/");
    }
}

module.exports = loginController;