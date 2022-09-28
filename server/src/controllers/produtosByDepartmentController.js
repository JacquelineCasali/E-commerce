const Sequelize= require("sequelize");
const configDB=require("../config/database");
const db=new Sequelize(configDB)
const Product  = require("../models/Product");

const produtosByDepartmentController = {
  index: async (req, res) => {
    try {
      const {name} = req.params
      const products = await Product.findAll({
        Where:{department:name}
      })
      res.render("productsByDepartment", { products: products,name:name,});
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = produtosByDepartmentController;