
const Router = require('express')
const router = new Router()
const {check, validationResult} = require('express-validator')
const deviceController = require('../controllers/deviceController')
router.put('/logo',  deviceController.setAvatar)
router.put('/EmailAndPassword', 
deviceController.setEmailAndPassword)
router.post('/addToFavPhoto',  deviceController.addToFavPhoto)
router.post('/getFavPhoto',  deviceController.getFavPhoto)
router.post('/removeFromFavPhoto',  deviceController.removeFromFavPhoto)
router.post('/addArticleToDatabase',  deviceController.addArticleToDatabase)
router.post('/getUserSubscribtions', deviceController.getSubscribtions)
router.post('/removeArticleFromDatabase', deviceController.removeArticleFromDatabase)
module.exports = router 
//removeFromFavPhoto
//removeArticleFromDatabase