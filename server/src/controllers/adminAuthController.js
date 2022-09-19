const fs = require("fs");
const path = require("path");
const bcrypt = require("../helpers/bcrypt");
const Admin = require("../models/Admin");

const adminAuthController = {
    adminLogin: (req, res) => {
        console.log(bcrypt.generateHash("Admin01"))
        return res.render("adminLogin", {
            title: "Admin Login",
            cssCaminho: "/stylesheets/adminLogin.css",
        })
    },
    adminAuth: async (req, res) => {
        const { username, senha } = req.body;

        // senha = bcrypt.generateHash(senha)
        console.log(bcrypt.generateHash(senha))

        try{
            const userAuth = await Admin.findOne({
                where: {
                    username,
                }
            });

            if(!userAuth){
                throw Error("USER_NOT_FOUND");
            }

            const userSenha = bcrypt.compareHash(senha, userAuth.senha)

            if(userSenha){
                req.session.username = userAuth.username;
    
                return res.redirect("/admin-produtos");
            }

            if(!userSenha){
                    res.render("adminLogin", {
                        title: "Admin Login",
                        cssCaminho: "/stylesheets/adminLogin.css",
                        error: "Dados inválidos"
                    })
            }
            
        } catch (error) {
            
            if(error.message === "USER_NOT_FOUND"){
                res.render("adminLogin", {
                    title: "Admin Login",
                    cssCaminho: "/stylesheets/adminLogin.css",
                    error: "Dados inválidos"
                })
            } else {
                res.json({message: "Erro ao encontrar usuário"})
            }
            
        }

        // const adminsJson = fs.readFileSync(
        //     path.join(__dirname, "..", "data", "admin.json"),
        //     "utf-8"
        // );

        // const admins = JSON.parse(adminsJson);

        // const userAuth = admins.find((admin) => {
        //     if(admin.username === username){
        //         if(bcryp.compareHash(senha, admin.senha)){
        //             return true;
        //         }
        //     }
        // });

        // if(!userAuth){
        //     res.render("adminLogin", {
        //         title: "Admin Login",
        //         cssCaminho: "/stylesheets/adminLogin.css",
        //         error: "Dados inválidos"
        //     })
        // }

        // req.session.username = userAuth.username;

        // return res.redirect("/admin-produtos");
    }   
}   

module.exports = adminAuthController;