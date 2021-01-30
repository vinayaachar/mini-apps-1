const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const { pathToFileURL } = require('url');
app.use(express.static('./client'));
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
const multer = require('multer');
const formidable = require('formidable');
app.use(express.static(__dirname + './samples'));
var fs = require('fs');
var busboy = require('connect-busboy');
app.use(busboy());
const fileUpload = require('express-fileupload');
app.use(fileUpload());

app.post('/', (req,res) => {
  console.log(__dirname);
  var sampleFile = req.files.json;
  uploadPath = __dirname + '/' + sampleFile.name;
  sampleFile.mv(uploadPath, (err) => {
    if (err) {
      throw err;
    }
    console.log('File Uploaded');
  });
  fs.readFile('sales_report.json', (err, data) => {
    if(err) throw err;
    const jsonObj = JSON.parse(data);
    var keysArray = Object.keys(jsonObj);
    var valuesArray = Object.values(jsonObj);
    keysArray.pop();
    var childArray = valuesArray.pop();
    var csvText = keysArray.join(',') + '\n';
    csvText += valuesArray.join(',') + '\n';
    function jsonParser(obj) {
      for (var i = 0; i < obj.length; i++) {
          for(var keys in obj[i]) {
              if (keys === 'children' && obj[i][keys].length > 0) {
                csvText += '\n';
                  jsonParser(obj[i].children);
              } else if (keys === 'children' && obj[i][keys].length === 0) {
                csvText += '\n'
                  continue;
              } else {
                csvText += obj[i][keys] + ',';
              }
          }
      }
  }
    jsonParser(childArray);
    fs.writeFile(__dirname + '/sales_report.csv' , csvText, (err) => {
      if (err) throw err;
      console.log("File Downloaded Locally");
    })
    res.sendFile('index.html', {root: path.join(__dirname, './client')});
    // res.send(`<div>${csvText}</div><form action = "/" method="post"><label for ="json">Enter JSON</label><br><input class ="submissionfield" type="file" id="json" name="json"><br><button type="submit">Submit</button></form>`);
  })
})

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, './client')});
})

app.listen(port, () => {
  console.log(`App listening http://localhost:${port}`);
})

