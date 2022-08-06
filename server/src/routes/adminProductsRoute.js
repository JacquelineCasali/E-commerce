const express = require('express');
const router = express.Router();

const adminProductsController=require("../controllers/adminProductsController");

router.get("/", adminProductsController.adminHome);
router.get("/criar", adminProductsController.adminCriar);
router.post("/criar", adminProductsController.adminStore);
router.get("/delete/:id", adminProductsController.adminDelete);
router.delete("/delete/:id", adminProductsController.adminDestroy);
router.get("/:id", adminProductsController.adminShow);
router.patch("/:id", adminProductsController.adminUpdate);


module.exports = router;