const express = require ('express');
const router = express. Router();
const multer = require ('multer');
router.use(express.json());
const {
    postPost,
    getGet,
    putPut,
    delDel,
userProfile}
    = require('../Controllers/usercontrollers')


const storage = multer.diskStorage({
    destination :'./public/userProfile',
    filename: function (req,file,cb){
    cb(null,file.originalname +Date.now)
}
});
const uploading = multer({storage:storage})
const singleUpload = uploading.single('profilepic');


router.post ("/again",postPost)
router. get ( "/moon", getGet)
    
router.put("/edit/:id",putPut)
    
    
router.delete("/delete/:id", delDel)
router.post("/profile",singleUpload,userProfile )
module.exports=router;