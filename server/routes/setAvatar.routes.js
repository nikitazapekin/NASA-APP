






/*
const { Router } = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid')
const User = require('../models/User')
const path = require('path');
const router = Router();
const jwt = require('jsonwebtoken')
const { jwtDecode } = require("jwt-decode")
//const {} =require("../static/")
router.put('/logo', async (req, res) => {
    try {
        const { url, token } = req.body;
        const fileName = uuid.v4() + ".jpg";
   //   console.log("URLlll"+url)
   console.log("RQE FILE"+req.file)
      console.log("dir" +__dirname)
      console.log("path:"+path.resolve(__dirname, '..', 'static', fileName))
 //     url.mv(path.resolve(__dirname, '..', 'static', fileName))  
      url.mv(path.resolve(__dirname, '..', 'static', fileName))  
        //console.log("file: " + fileName); C:\Users\wotbl\NASA-APP-1\server
        
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;

        const user = await User.findOne({ _id: userId });
        
        if (user) {
            user.set({ url: fileName }); // Устанавливаем новое значение поля 'url'

            const updatedUser = await user.save(); // Сохраняем обновленного пользователя

            res.status(200).json({ message: "Пользователь успешно обновлен", user: updatedUser });
        } else {
            res.status(404).json({ message: "Пользователь не найден" });
        }
    } catch (e) {
        res.status(500).json({ message: e, mess: "WROOOOOOOOOONG"});
    }
});

module.exports = router; 
*/




//app.post('/api/0.1/people', express.bodyParser({limit: '5mb'}), yourHandler);

const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
router.put('/logo',  deviceController.setAvatar)
//router.post('/', deviceController.create)
//router.get('/', deviceController.getAll)
//router.get('/:id', deviceController.getOne)

module.exports = router 