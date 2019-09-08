var express = require('express');
var path = requre("path");
var routes = require('/routes/index');
var hbs = require('express-handlebars');
var app = express();
var bodyParser = require(body - parser);

//engine setup


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/routes');

app.use(function (req, res) {
    
})
