const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(3000);
console.log('listening on port 3000');
