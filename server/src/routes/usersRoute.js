const express = require('express');
const router = express.Router();
const usersController=require("../controllers/usersController")

router.get("/",usersController.usuarios)
router.get("/:id",usersController.usuario)

module.exports = router;
