const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const { pathToFileURL } = require('url');
app.use(express.static('./client'));
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');

app.post('/', (req,res) => {
  var array = [];
  var jsonObj = JSON.parse(req.body.json);
  var keysArray = Object.keys(jsonObj);
  var valuesArray = Object.values(jsonObj);
  keysArray.pop();
  var childArray = valuesArray.pop();
  array = keysArray.concat(valuesArray);
  function jsonParser(obj) {
      for (var i = 0; i < obj.length; i++) {
          for(var keys in obj[i]) {
              if (keys === 'children' && obj[i][keys].length > 0) {
                  jsonParser(obj[i].children);
              } else if (keys === 'children' && obj[i][keys].length === 0) {
                  continue;
              } else {
                  array.push(obj[i][keys]);
              }
          }
      }
  }
  jsonParser(childArray);
  var txt = array.join(',');
  //res.render('index');
  //res.sendFile('index.html', {root: path.join(__dirname, './client')});
  //res.write(txt);
  res.send(`<div>${txt}</div><form action = "/" method="post"><label for ="json">Enter JSON</label><br><input class ="submissionfield" type="text" id="json" name="json"><br><button type="submit">Submit</button></form>`);
  //res.send(txt);
})

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, './client')});
})

app.listen(port, () => {
  console.log(`App listening http://localhost:${port}`);
})