const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const multer = require('multer')
const auth = require(__base + 'modules/auth/protect.js');

const storage=multer.diskStorage({
    destination:'./uploads/',
    filename:(req,file,cb)=>{
      cb(null,new Date().toISOString()+ file.originalname);
    }
  });
  
const upload=multer({storage: storage});

//Saving New Application Data In mongoosegoDb
router.post('/new', auth, require(__base + 'modules/forms/newCon.js'))

//My connections
router.post('/mycon', auth, require('../modules/forms/myCon'))

//Update Connection
router.post('/update', auth, require('../modules/forms/updateCon'))

//testing part
router.put('/transfer', auth, require(__base + 'modules/forms/transferCon.js'))

//for closure of connection
router.patch('/closure', auth, require(__base + 'modules/forms/closeCon.js'))

//for deleting connection
router.delete('/delete', auth, require(__base + 'modules/forms/deleteCon.js'))

router.post('/uploadDoc',upload.single('documentImage'),(req,res)=>{
    res.send(req.file.path);
});

module.exports = router;
