
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/link', require('./routes/link.routes'))
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

//npm run server

// CATALOGUEOFPURCHASES > DATABASES