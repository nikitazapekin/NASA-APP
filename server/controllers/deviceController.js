
const uuid = require('uuid');
const path = require('path');
const { Router } = require('express');
const bodyParser = require('body-parser');
const User = require('../models/User');
const router = Router();
const jwt = require('jsonwebtoken');
const { jwtDecode } = require('jwt-decode');
const axios = require('axios');
const fs = require('fs');

class DeviceController {
  async create(req, res, next) {
    try {
      // Логика создания устройства
    } catch (e) {
      res.status(500).json({ message: e });
    }
  }

  async setAvatar(req, res) {
    try {
      let { url, token } = req.body;
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static', fileName);

      const response = await axios.get(url, {
        responseType: 'arraybuffer' // Получаем данные как массив байтов
      });
      fs.writeFile(filePath, response.data, 'binary', (err) => {
        if (err) {
       //   res.status(500).json({ message: err });
        } else {
       //   res.json({ message: 'File written successfully', filePath });
        }
      });
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;

      const user = await User.findOne({ _id: userId });
      if (user) {
      //  user.set({ url: filePath }); 
      user.set({ url:  `http://localhost:5000/${fileName}` }); 
        const updatedUser = await user.save();

    
    } else {
      
    }


    } catch (e) {
      res.status(500).json({ message: e });
    }
  }
}

module.exports = new DeviceController();



//http://localhost:5000/4c07ec40-931b-4cf7-bd4b-e84cc3fbb40c.jpg