const Sequelize = require("sequelize");
const configDB = require("../config/database");
const db = new Sequelize(configDB);

const carrinhoController = {
  async adicionarProdutoCarrinho(req, res) {
    const { id, name, price, image } = req.body;
    const { carrinho } = req.session;
    const products = {
      id: id,
      name,
      price,
      image,
    };

    if (req.session.carrinho) {
      req.session.carrinho.push(products);
    } else {
      req.session.carrinho = [products];
    }
    res.render("carrinho", { carrinho });
  },

}

module.exports = carrinhoController;
