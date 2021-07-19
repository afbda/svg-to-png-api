const { convert } = require('convert-svg-to-png');
const express = require('express');
var bodyParser = require('body-parser')
 
const app = express();~
app.use(bodyParser.json())
 
app.post('/convert', async(req, res) => {
  const png = await convert(req.body.svg);
 
  res.set('Content-Type', 'text/plain');

  res.send(png.toString('base64'));
});
 
app.listen(3000);