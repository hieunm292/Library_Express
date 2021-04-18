const express = require('express')
const router = express.Router()

const multer  = require('multer')
const upload = multer({ dest: './public/uploads/' })

// Set The Storage Engine
// const storage = multer.diskStorage({
//     destination: './public/uploads/',
//     filename: function(req, file, cb){
//       cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
//   });

  // Init Upload
// const upload = multer({
//     storage: storage,
//     limits:{fileSize: 1000000},
//     fileFilter: function(req, file, cb){
//       checkFileType(file, cb);
//     }
//   }).single('avatar');

const controller=require('../controllers/user.controller')
const validate=require('../validate/user.validate')

router.get('/', controller.index)

router.get('/search',controller.search)

router.get('/create',controller.create)

router.get('/:id',controller.get)
  
router.post('/create', upload.single("avatartar"), validate.postCreate, controller.postCreate)

module.exports=router;
