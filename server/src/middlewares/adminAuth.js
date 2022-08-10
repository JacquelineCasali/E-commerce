const adminAuthMiddleware = (req, res, next) => {
    const isAuth = req.session.username;
    // Se está autenticado vai para a próxima função
    if (isAuth) {
      res.redirect("/admin-produtos")
    }
    // Se não apaga cache e destroi sessão
    else {
      next();
    }
  };
  module.exports = adminAuthMiddleware;