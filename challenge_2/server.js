const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
app.use(express.static('./client'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req,res) => {
  console.log(req.body);
  res.sendStatus(200);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})