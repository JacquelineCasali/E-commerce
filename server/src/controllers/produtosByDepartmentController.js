const { Product } = require("../models");

const produtosByDepartmentController = {
  index: async (req, res) => {
    try {
      const {name} = req.params
      const products = await Product.findAll({
        Where:{department:name}
      })
      res.render("productsByDepartment", { products: products,name:name});
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = produtosByDepartmentController;