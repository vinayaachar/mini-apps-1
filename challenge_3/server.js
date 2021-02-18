const express = require('express');
const app = express();
const path = require('path');
const dbSave = require('./databse/index.js')

const port = 3000;

var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));



// app.get('/', (req, res) => {
//   res.sendFile('index.html', {root: path.join(__dirname, './public')});
// })

app.post('/form', (req, res) => {
  dbSave.save(req.body, (err, data) => {
    if(err) console.log(err)
    res.status(200).send('Added Form successfully');
  });
})

app.listen(port, () => {
  console.log(`Checkout app listening at http://localhost:${port}`);
})

