
const Router = require('express')
const router = new Router()
const {check, validationResult} = require('express-validator')
const deviceController = require('../controllers/deviceController')
router.put('/logo',  deviceController.setAvatar)
router.put('/EmailAndPassword', 
//check('email', 'Введите корректный email').normalizeEmail().isEmail(),
//check('email', 'Введите корректный email').isEmail(),
deviceController.setEmailAndPassword)
module.exports = router 