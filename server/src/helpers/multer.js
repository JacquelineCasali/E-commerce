const multer = require("multer");
const crypto = require("crypto");
const uploadConfig = require("../config/upload");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadConfig.imagePath)
    },
    filename: (req, file, cb) => {
        const extension = file.originalname.split(".")[1];
        const newName = crypto.randomBytes(15).toString("hex");

        cb(null, `${newName}.${extension}`)
    }
});

const upload = multer({ storage });

module.exports = upload;