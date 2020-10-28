const express = require('express');
const app = express();
const port = 3000;
const helmet = require("helmet");
app.use(helmet());
const bodyParser = require('body-parser');


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/soap', function (req, res) {
    res.send('Got a SOAP request')
  })


  app.post('/rest', function (req, res) {
    res.send('Got a REST request')
  })
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})