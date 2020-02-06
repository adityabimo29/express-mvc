const express = require('express');
const router = express.Router();

 const {getAll,updateByEmail,deleteByEmail,getByEmail} = require('./controller')

router.get('/',getAll);
router.put('/edit/:email',updateByEmail);
router.get('/:email',getByEmail);
router.delete('/delete/:email',deleteByEmail);

module.exports = router;