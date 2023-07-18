const Compte = require('../models/comptes.js');

module.exports = async (req, res, next) => {
    try {
        const compte = await Compte.findById(idCompte).
            populate({
                path: 'userId',
                match: { _id: idUser }
            })
        next();
    } catch (error) {
        res.status(401).json({
            error: "vous n'etes pas autoriser à acceder ce compte"
        });
    }

}