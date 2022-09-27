const db = require("../config/sequelize");
const Department  = require ("../models/Department");
const  Product  = require("../models/Product");

const indexController ={
    home:async (req, res) => {
        try {
          const department = await Department.findAll({});
          const products = await Product.findAll({limit:8});
        
          res.render("home", { department: department,products: products});
        } catch (error) {
          console.log(error);
        }
      }
        
    } 
 module.exports = indexController