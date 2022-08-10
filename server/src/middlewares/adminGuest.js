const adminGuestMiddleware = (req, res, next) => {
    const isAuth = req.session.username;

    if(!isAuth){
        res.redirect("/admin-produtos/login")
    } else {
        next();
    }
}

module.exports = adminGuestMiddleware;