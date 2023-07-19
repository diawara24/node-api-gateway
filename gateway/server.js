const express = require('express');
const app = express();
const proxy = require("express-http-proxy")
const adminMiddleware = require("./app/middleware/adminMiddleware.js")


app.use("/api/auth", proxy("http://auth:8080"))


app.use("/api/products", adminMiddleware, proxy("http://products:8081"))



app.listen(3000, "0.0.0.0", () => {
  console.log('API Gateway en cours d\'exécution sur le port 3000');
});