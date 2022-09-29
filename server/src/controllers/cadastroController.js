const fs = require("fs");
const path = require("path");
const bcrypt = require("../helpers/bcrypt");
const db = require("../config/sequelize");
const User = require("../models/User");


const cadastroController={

    index:(req,res)=>{
        return res.render("cadastro",{user: req.cookies.user,title:"Cadastro"});
       
    },
      store: async (req, res) => {
        const {email,cpf,nome,celular,birthdate,sexo,password } = req.body;
        const senha= bcrypt.generateHash(password)
        try {
          const user = await User.create({
            email,cpf,nome,celular, birthdate,sexo,senha
          });   
          req.session.email = user.email;
            req.session.nome = user.nome;
            res.cookie("user", user);
            return res.redirect("/");
        } catch (error) {
          console.log(error);
          res.status(400).json({ message: "Erro ao criar usuário" });
        }
      },
   
    }


module.exports = cadastroController;