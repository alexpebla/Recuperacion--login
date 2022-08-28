
const router = require('express').Router()

const mainController = require('../controllers/mainController')
const auth = require('../middlewares/auth')


router.get ("/login",mainController.login)

router.post ("/login",mainController.loginProcess)



module.exports = router;
