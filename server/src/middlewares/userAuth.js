const userAuthMiddleware = (req, res, next) => {
    const isAuth = req.session.email;
    // Se está autenticado vai para a próxima função
    if (isAuth) {
      next()
    }
    // Se não apaga cache e destroi sessão
    else {
    req.session.destroy();
    res.clearCookie("user");
    res.redirect("/");
    }
  };
  module.exports = userAuthMiddleware;