var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
const worldometer = require('worldometer-coronavirus-info')


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

app.get('/neighborhood', function (req, res) {
    res.sendFile(__dirname + '/neighborhood.html');
});

app.post('/count', function (req, res) {
    (async () => {
        let data = await worldometer.trackAll();
        console.log(data);
        res.send(JSON.stringify({ "count": data.totalCases }));
        // Since we are using an async function, we need to return the data.
        return console.log(`
    Total Cases: ${data.totalCases}
    Total Deaths: ${data.totalDeaths}
    Total Recovered: ${data.totalRecovered}`);
    })();
    
});