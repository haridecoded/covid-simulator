var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.use(express.static('resources'));
app.use(bodyParser.json());

app.listen(port, function () {
    console.log('Our app is running on http://localhost:' + port);
});


// set the home page route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});