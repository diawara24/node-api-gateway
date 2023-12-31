const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        //decoded the token
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decodedToken.id;
        const role = decodedToken.role;
        //save userId in req.auth var
        req.auth = {
            userId,
            role
        };
        next();
        
    } catch (err) {
        res.status(401).json({
            error: 'Unauthorized request!'
        });
    }
};