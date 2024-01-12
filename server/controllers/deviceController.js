
const uuid = require('uuid');
const path = require('path');
const { Router } = require('express');
const bodyParser = require('body-parser');
const User = require('../models/User');
const emailValidator = require('email-validator');
const router = Router();
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator')
const { jwtDecode } = require('jwt-decode');
const axios = require('axios');
const bcrypt = require('bcryptjs')
const fs = require('fs');
class DeviceController {
  async create(req, res, next) {
    try {
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
        responseType: 'arraybuffer' 
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
      user.set({ url:  `http://localhost:5000/${fileName}` }); 
        const updatedUser = await user.save();
    } else { 
    }
    } catch (e) {
      res.status(500).json({ message: e });
    }
  }
  async setEmailAndPassword(req, res) {
try {
const {email, password, token} = req.body
console.log("em" +email, "pas"+password, "tok"+ token)
if (!emailValidator.validate(email)) {
  return res.status(400).json({ message: 'Некорректный формат email' });
}

const decodedToken = jwtDecode(token);
const userId = decodedToken.userId;
const user = await User.findOne({ _id: userId });
const hashedPassword = await bcrypt.hash(password, 12)
user.set({ email: email, password: hashedPassword}); 
const updatedUser = await user.save();

/*const decodedToken = jwtDecode(token);
const userId = decodedToken.userId;
const user = await User.findOne({ _id: userId }); */
//const isEmailAdres= validator.isEmail(email); 
//console.log("isValid"+isEmailAdres)
//check('email', 'Введите корректный email').isEmail()
//user.set({ url:  `http://localhost:5000/${fileName}` }); 
//const updatedUser = await user.save();

} catch(e){
  res.status(500).json({message: e})
}
  }
}

module.exports = new DeviceController();



//http://localhost:5000/4c07ec40-931b-4cf7-bd4b-e84cc3fbb40c.jpg