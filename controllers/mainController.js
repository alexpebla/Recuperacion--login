const models = require('../models');
const bcrypt = require('bcryptjs');


module.exports  = {
    
    login :(req, res) => {
        res.render('login')},
        loginProcess: async(req, res, next) => {
            try {
                console.log(req.body.correo)
                let user = await models.Usuario.findOne( 
                    { 
                        correo : req.body.correo,
                        estado : 1
                     } 
                );
                if (user) {
                    let match = await bcrypt.compare(req.body.password, user.password);
                    if (match) {
                        console.log(user.rol);
                        res.status(200).json({ user });
                    } else {
                        res.status(401).send({
                            message: 'Password Incorrecto'
                        });
                    }
                } else {
                    res.status(404).send({
                        message: 'No existe el user'
                    });
                }
            } catch (e) {
                res.status(500).send({
                    message: 'Ocurrió un error'
                });
                next(e);
            }
        }
    }