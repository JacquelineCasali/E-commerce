const Sequelize= require("sequelize");
const configDB=require("../config/database");
const db=new Sequelize(configDB)
const Product  = require("../models/Product");

const produtosController = {
  index: async (req, res) => {
    try {
      const products = await Product.findAll({});
      // console.log(products);
      res.render("produtos", { products: products });
    } catch (error) {
      console.log(error);
    }
  },
  produtoDetalhe: async (req, res) => {
    try {
      let { id } = req.params;

      let product = await Product.findOne({
        where:{
          id,
        }
        
      });
      console.log(product);
      return res.render("produtoDetalhe", { product });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = produtosController;
