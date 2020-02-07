const express = require('express');
const router = express.Router();
const {upload} = require('../../config');
const {getAll,updateByEmail,deleteByEmail,getByEmail,postData} = require('./controller')

router.get('/',getAll);
router.put('/edit/:email',updateByEmail);
router.get('/:email',getByEmail);
router.delete('/delete/:email',deleteByEmail);

// Upload files > 1
// router.post('/',upload.fields([
//     {
//     name:'avatar',
//     maxCount: 1
//     },
//     {
//         name:'gambar',
//         maxCount:1
//     }
// ]))

// Multiple files
// router.post('/',upload.array('avatar',2),postData);

// Upload Single files
router.post('/',upload.single('avatar'),postData);

module.exports = router;