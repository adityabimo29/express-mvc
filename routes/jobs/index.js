const express = require('express');
const router = express.Router();

const {addPost , getAll ,getOne , deleteOne, updateOne, getByUserId} = require('./controller');

router.post('/add',addPost);
router.get('/',getAll);
router.get('/id/:id',getOne);
router.delete('/hapus/:id',deleteOne);
router.put('/ubah/:id',updateOne);
router.get('/user/:id',getByUserId);

module.exports = router;