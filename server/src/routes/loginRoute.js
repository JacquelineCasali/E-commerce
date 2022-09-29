const express = require('express');
const router = express.Router();
const loginController=require("../controllers/loginController")
const isAuth = require("../middlewares/userAuth")
const isGuest = require("../middlewares/userGuest")

router.get("/login",isGuest,loginController.login)
router.post("/login",isGuest,loginController.auth)
router.get("/login/:id",isGuest,loginController.show)
router.get("/logout", isAuth, loginController.logout); 

module.exports = router;
