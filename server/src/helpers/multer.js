const multer=require("multer")
const crypto=require("crypto")
const uploadConfig=require("../config/uploads")
const storage=multer.diskStorage({
    destination:(req,file,cd)=>{
       cd(null,uploadConfig.path) 
    },
    filename:(req,file,cd)=>{
        // para nao sobrepor o arquivo
        // pegar extenção do arquivo 
        const extension=file.originalname.split(".")[1]
        // gera a string randomica
const newName=crypto.randomBytes(5).toString("hex");
// alterar o nome do arquivo para string randomica

        console.log(file)
        cd(null,`${newName}.${extension}`);
    }
});


const uploads = multer({storage})
// const upload=multer({dest:__dirname+ "/../../uploads/"}) ;
module.exports=uploads