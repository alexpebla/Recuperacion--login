const models = require('../models');
const bcrypt = require('bcryptjs');


module.exports  = {
    
    login :(req, res) => {
        res.render('login')},
    renderLogin: (req, res) => {
            console.log(req.session.Usuario);
            if (req.session.Usuario) {
                res.redirect(`${req.session.user_id}/perfil`)
            }
            return res.render('login', { user_info: req.session });
        },
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
                        let tokenReturn = await token.encode(user);
                    res.status(200).json({ user, tokenReturn });
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
        },
    perfil: (req, res) => {
            if (typeof req.body.usuario == 'undefined') {
                return res.status(401).send("401 - Debe ingresar al sitio para poder ver su perfil")
            }
    
            if (req.params.id == req.body.usuario) {
                return res.render('perfil');
            } else {
                return res.status(401).send('401 - El perfil de usuario al que intenta acceder es privado')
            }
        },
    }