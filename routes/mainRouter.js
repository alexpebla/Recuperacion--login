
const router = require('express').Router()

const mainController = require('../controllers/mainController')

router.get ("/login",mainController.login)

router.post ("/login",mainController.loginProcess)

router.get('/perfil', mainController.perfil);

module.exports = router;
