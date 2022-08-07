var fs = require("fs");

const files = {
  base64Encode: (file)=>{
    return "data:image/gif;base64," + fs.readFileSync(file, "base64")
  }
};
module.exports = files;