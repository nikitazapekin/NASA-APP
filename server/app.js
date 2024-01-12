
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const uuid = require('uuid')
const path = require('path')
const fileUpload = require('express-fileupload')
const app = express();
app.use(express.json());
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/link', require('./routes/link.routes'))
app.use('/api/set', require('./routes/setAvatar.routes'))

app.use(bodyParser());
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb'}));

//app.use(express.json({ limit: '10mb' }));
//app.use(express.json({ limit: '100mb' }));
//app.use(express.urlencoded({ extended: true, limit: '100mb' }));d
//var bodyParser = require('body-parser');а
//app.use(bodyParser.json({limit: "50mb"}));
//app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
//app.use(bodyParser.json({ limit: '100mb' }));
const PORT = config.get('PORT') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
app.post('http://localhost:3000/api/link/generate', (req, res)=> { 
console.log("GETTT")
res.json("GETTT")
})
app.post('/test', (req, res)=> {
  console.log("get")

})
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error('Server error: ' + err.message);
    process.exit(1);
  }
}

start();
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
// CATALOGUEOFPURCHASES > DATABASESf
//yarn server
// Nikita20041977

