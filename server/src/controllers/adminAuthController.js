const fs = require("fs");
const path = require("path");
const bcryp = require("../helpers/bcrypt");

const adminAuthController = {
    adminLogin: (req, res) => {
        return res.render("adminLogin", {
            title: "Admin Login",
            cssCaminho: "/stylesheets/adminLogin.css",
        })
    },
    adminAuth: (req, res) => {
        const { username, senha } = req.body;

        const adminsJson = fs.readFileSync(
            path.join(__dirname, "..", "data", "admin.json"),
            "utf-8"
        );

        const admins = JSON.parse(adminsJson);

        const userAuth = admins.find((admin) => {
            if(admin.username === username){
                if(bcryp.compareHash(senha, admin.senha)){
                    return true;
                }
            }
        });

        if(!userAuth){
            res.render("adminLogin", {
                title: "Admin Login",
                cssCaminho: "/stylesheets/adminLogin.css",
                error: "Dados inválidos"
            })
        }

        req.session.username = userAuth.username;

        return res.redirect("/admin-produtos");
    }   
}   

module.exports = adminAuthController;