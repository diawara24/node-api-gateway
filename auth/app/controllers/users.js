const User = require('../models/users.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY

exports.signup = async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            role: req.body.role,
            email: req.body.email,
            password: req.body.password,
        });
        const insertedUser = await newUser.save();

        res.status(201).json(insertedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json(error || "serveur error");
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });

        if (!user) {
            return res.status(404).json({
                error: "Cet utilisateur n'existe pas",
            });

        } else {
            const match = await bcrypt.compare(req.body.password, user.password);
            if (match) {
                const token = jwt.sign(
                    {
                        id: user.id,
                        role: user.role
                    }, SECRET_KEY
                );
                return res.status(200).json({
                    accessToken: token,
                    user: user,
                });
            } else {
                throw new Error("Mot de passe incorrect");
            }
        }
    } catch (err) {
        res.status(500).json({
            error:
                err.message || `erreur serveur`
        });
    }
}


exports.getUserInfoFromToken = (req, res) => {
    try {
        res.status(200).json({
            id: req.auth.userId,
            role: req.auth.role
        });
    } catch (error) {
        console.log(error);
    }

}
