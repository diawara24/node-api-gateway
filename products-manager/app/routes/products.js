const express = require('express');
const router = express();
const productCtrl = require('../controllers/products.js');

router.get('/', productCtrl.get);

router.post('/', productCtrl.add);

router.put('/:id', productCtrl.update);

router.delete('/:id', productCtrl.delete);

module.exports = router;