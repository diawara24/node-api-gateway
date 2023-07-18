
const Compte = require('../models/comptes.js');

exports.isUserCompte = async (idCompte, idUser) => {
    const compte = await Compte.findById(idCompte).
        populate({
            path: 'userId',
            match: { _id: idUser }
        })
    if (compte.userId) {
        return true;
    }
    return false;
}