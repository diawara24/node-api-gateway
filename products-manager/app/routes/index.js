const express = require('express');
const router = express();
const userRoutes = require('./products.js'); 


router.use("/", userRoutes);

module.exports = router;