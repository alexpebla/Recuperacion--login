
const router = require('express').Router()

const mainController = require('../controllers/mainController')

router.get ("/login",mainController.login)

router.post ("/login",mainController.loginProcess)

module.exports = router;
