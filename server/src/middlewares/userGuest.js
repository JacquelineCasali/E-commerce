const userGuestMiddleware = (req, res, next) => {
    const isAuth = req.session.email;

    if(!isAuth){
        next();
    } else {
        res.redirect("/");
    }
}

module.exports = userGuestMiddleware;