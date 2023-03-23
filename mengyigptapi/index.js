// A express server, which will handle api requests coming in and respond back with a json object. 
// It will use body parser as well as cors

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hiiii');
});

app.listen(port,()=> {
    console.log('Example app listening');
});