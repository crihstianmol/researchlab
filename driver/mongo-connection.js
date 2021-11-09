const mongoose = require('mongoose');
const user = process.env.USER;
const pw = process.env.PW;
const dbendpoint = process.env.DBENDPOINT;
const dbname = process.env.DBNAME;
const mongoUrl = `mongodb+srv://${user}:${pw}@${dbendpoint}/${dbname}?retryWrites=true&w=majority`;

mongoose.set('runValidators', true);

const db = mongoose.connect(mongoUrl, {}, (error) => {
  if (error) {
    console.log(`Error conectando a mongo ${error} `);
  } else {
    console.log('Conectado a mongo');
  }
});

module.exports = db;