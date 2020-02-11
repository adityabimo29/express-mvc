const  multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'./assets/images')
    },
    filename:(req,file,cb)=> {
        let filetype = "";
        if(file.mimetype === "image/png") {
            filetype = "png";
        } else if (file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
            filetype = "jpg";
        }
        cb(null, file.originalname.replace(/ /g, "_"));
       // cb(null,file.originalname)
    }
})

const upload = multer({storage: storage});
module.exports = upload;