var express = require('express');
var app = express();
var port = 5000;
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var images = require('./routes/images');


app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', index);
app.use('/images', images);

app.listen(port, function() {
    console.log('listening on port: ', port);
});