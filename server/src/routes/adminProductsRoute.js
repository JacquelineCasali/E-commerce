const express = require('express');
const router = express.Router();
const upload = require("../helpers/multer");
const adminProductsValidator =  require("../validators/adminProdutosValidator");
const isGuest = require("../middlewares/adminGuest");
const isAuth = require("../middlewares/adminAuth");

const adminProductsController=require("../controllers/adminProductsController");
const adminAuthController = require("../controllers/adminAuthController");

router.get("/", isGuest, adminProductsController.adminHome);
router.get("/login", isAuth, adminAuthController.adminLogin);
router.post("/login", isAuth, adminAuthController.adminAuth);
router.get("/criar", isGuest, adminProductsController.adminCriar);
router.post("/criar", isGuest, upload.single("produto-img"), adminProductsValidator.storeValidator, adminProductsController.adminStore);
router.get("/delete/:id", isGuest, adminProductsController.adminDelete);
router.delete("/delete/:id", isGuest, adminProductsController.adminDestroy);
router.get("/:id", isGuest, adminProductsController.adminShow);
router.patch("/:id", isGuest, upload.single("produto-img"), adminProductsController.adminUpdate);


router.get("/", adminProductsController.adminHome);
router.get("/criar", adminProductsController.adminCriar);
router.post("/criar", adminProductsController.adminStore);
router.get("/delete/:id", adminProductsController.adminDelete);
router.delete("/delete/:id", adminProductsController.adminDestroy);
router.get("/:id", adminProductsController.adminShow);
router.patch("/:id", adminProductsController.adminUpdate);



module.exports = router;