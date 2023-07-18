const express = require('express');
const app = express();
const proxy = require("express-http-proxy")


app.use("/api/auth", proxy("http://auth"))



app.listen(3000, "0.0.0.0", () => {
  console.log('API Gateway en cours d\'exécution sur le port 3000');
});