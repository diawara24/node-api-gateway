require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./app/models/index.js');
const router = require("./app/routes/index.js");

app.use(express.json());

// connexion a la base donnee
connectDB();

// root principal
app.use("/", router);


module.exports = app;