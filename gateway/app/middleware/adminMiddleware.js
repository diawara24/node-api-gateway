const app = require('../../app.js');
const axios = require('axios');

module.exports = (req, res, next) => {
    try {
        const url = "http://auth:8080/api/auth/getUserInfoFromToken";
        const config = {
            headers:{
                authorization: req.headers.authorization
            }
          };
        axios.get(url, config)
            .then((response) => {
                if (response.role == "ROLE_ADMIN") {
                    next();
                }
            })
            .catch((error) => {
                console.log(error);
            })
    } catch (err) {
        res.status(401).json({
            error: 'Unauthorized request!'
        });
    }
};