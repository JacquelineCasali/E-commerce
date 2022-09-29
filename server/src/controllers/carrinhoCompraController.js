const User = require("../models/User");
const Order = require("../models/Order");
const OrderProduct = require("../models/OrderProduct");
const {now} = require('moment')

const carrinhoCompraController = {
  async save(req, res) {
    try {
      const carrinho = req.body.carrinho;

      if (!req.session.login) {
        res.status(401).json({ erro: "Usuário não logado" });
      }
      const { email } = req.body;
      const user = await User.findOne(email);

      console.log("usuario =>", user);

      const buy = await Order.create({
        user_id: user.id,
        created_at: now(),
        status: user.status,
      });

      const products = carrinho.map((produto) => {
        const p = {
          product_id: produto.id,
          order_id: produto.order_id,
          quantity: produto.quantity,
          price: produto.price,
        };
        console.log("tenho => ", { produto, p });
        return p;
      });

      const resultado = await OrderProduct.bulkCreate(products);
      console.log(resultado, "resultado");
      res.send("compra realizada com sucesso");
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = carrinhoCompraController;
