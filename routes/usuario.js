const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/UsuarioController')
const auth = require('../middlewares/auth')


router.post('/add', usuarioController.add);
router.get('/list', auth.verificarUsuario, usuarioController.list);
router.get('/login', usuarioController.login);
router.post('/login', auth.verificarUsuario, usuarioController.login);
router.put('/update', usuarioController.update);
router.put('/enabled', usuarioController.enabled);
router.put('/disabled', usuarioController.disabled);


module.exports = router;