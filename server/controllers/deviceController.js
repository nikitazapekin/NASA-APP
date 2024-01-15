
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
async addToFavPhoto(req, res) {
  const  {token, title, url, date, explanation } =req.body
  console.log("clear")
 try {
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;
  const user = await User.findOne({ _id: userId });
const itemObject ={
  title: title,
  url: url,
  date: date,
  explanation: explanation
}
user.set({ 'fav.photos': [...user.fav.photos, itemObject] });
const updatedUser = await user.save();
 } catch(e){
  res.status(500).json(e)
 }
}



async getFavPhoto(req, res) {
  const  {token } =req.body
  console.log("wwww")
 try {
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;
  const user = await User.findOne({ _id: userId });
res.json({data: user.fav.photos})
 } catch(e){
  res.status(500).json(e)
 }
}



async removeFromFavPhoto(req, res) {
  const  {token, url } =req.body
try {
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;
  const user = await User.findOne({ _id: userId });
//  const arr =user.fav.photos.map(item=>item.url!=url ? item : [])
const arr = user.fav.photos.filter(item => item.url !== url);

  console.log("ARR" +JSON.stringify(arr))
  user.set({ 'fav.photos': arr });
  //user.set({ 'fav.photos': [...user.fav.photos, itemObject] });
//  user.set({ 'fav.photos': user.fav.photos.map(item=>item.url!=url)});
 const updatedUser = await user.save();
} catch(e) {
  res.status(500).json({message: e})
}
}



async addArticleToDatabase(req, res) {
  const  {token, data, data1 } =req.body
  console.log("wggggggggggw")
  console.log(JSON.stringify(data), JSON.stringify(data1))
 try {
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;
  const user = await User.findOne({ _id: userId });
  const itemObject = {
    data1: data1,
     data: data
  }
  user.set({ 'fav.articles': [...user.fav.articles, itemObject]  }); 
  const updatedUser = await user.save();
 } catch(e){
  res.status(500).json(e)
 }
}



async getSubscribtions(req, res) {
  const  {token } =req.body
  console.log("wwww")
 try {
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;
  const user = await User.findOne({ _id: userId });
 const newArr = user.fav.articles.map(item =>item.data )
 console.log(newArr)
 res.json({data: newArr})
 } catch(e){
  res.status(500).json(e)
 }
}
async removeArticleFromDatabase (req, res) {
const {token, nasa_id} = req.body
try {
console.log(nasa_id)


const decodedToken = jwtDecode(token);
const userId = decodedToken.userId;
const user = await User.findOne({ _id: userId });
console.log( user.fav.articles.map(item=>{
 // console.log("EL"+JSON.stringify(item))
  console.log("WWWW"+ JSON.stringify(item.data.collection.items[0].data[0].nasa_id))
}))
const filteredArray = user.fav.articles.filter(item=>item.data.collection.items[0].data[0].nasa_id!=nasa_id)
user.set({ 'fav.articles': filteredArray  }); 
console.log("FILTER"+JSON.stringify(filteredArray))
const updatedUser = await user.save();



} catch(e) {
  res.status(500).json({message: e})
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
} catch(e){
  res.status(500).json({message: e})
}
  }
}

module.exports = new DeviceController();



//http://localhost:5000/4c07ec40-931b-4cf7-bd4b-e84cc3fbb40c.jpg