const express = require('express');
const router = express();
const userCtrl = require('../controllers/users.js');
const auth = require('../middleware/auth.js');

router.post('/signup', userCtrl.signup);

router.post('/login', userCtrl.login);

router.get('/getUserInfoFromToken', auth, userCtrl.getUserInfoFromToken);

module.exports = router;