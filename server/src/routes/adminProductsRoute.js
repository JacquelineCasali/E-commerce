const express = require('express');
const router = express.Router();
const multer = require("multer");
const crypto = require("crypto");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname  + "/../public/images/")
    },
    filename: (req, file, cb) => {
        const extension = file.originalname.split(".")[1];
        const newName = crypto.randomBytes(15).toString("hex");

        cb(null, `${newName}.${extension}`)
    }
});

const upload = multer({ storage })

const adminProductsController=require("../controllers/adminProductsController");

router.get("/", adminProductsController.adminHome);
router.get("/criar", adminProductsController.adminCriar);
router.post("/criar", upload.single("produto-img"), adminProductsController.adminStore);
router.get("/delete/:id", adminProductsController.adminDelete);
router.delete("/delete/:id", adminProductsController.adminDestroy);
router.get("/:id", adminProductsController.adminShow);
router.patch("/:id", upload.single("produto-img"), adminProductsController.adminUpdate);


module.exports = router;