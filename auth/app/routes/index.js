const express = require('express');
const router = express();
const userRoutes = require('./users.js'); 


router.use("/", userRoutes);

module.exports = router;