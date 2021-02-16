const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

var bodyParser = require('body-parser')

app.use(express.static(__dirname + 'public'));
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, './public')});
})


app.listen(port, () => {
  console.log(`Checkout app listening at http://localhost:${port}`);
})

