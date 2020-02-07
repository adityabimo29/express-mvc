const express = require('express');
const router = express.Router();
const {upload} = require('../../config');
const {getAll,updateByEmail,deleteByEmail,getByEmail,postData} = require('./controller')

router.get('/',getAll);
router.put('/edit/:email',updateByEmail);
router.get('/:email',getByEmail);
router.delete('/delete/:email',deleteByEmail);
router.post('/',upload.single('avatar'),postData);

module.exports = router;