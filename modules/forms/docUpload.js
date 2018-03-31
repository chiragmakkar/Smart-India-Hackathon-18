const express=require('express');
const router=express.Router();
const multer=require('multer');

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'./uploads/');
  },
filename:(req,file,cb)=>{
    cb(null,new Date().toISOString()+ file.originalname);
  }
});

const upload=multer({storage:storage});

router.post('/',upload.single('documentImage'),(req,res,next)=>{

   console.log(req.file.path)

});
module.exports=router;