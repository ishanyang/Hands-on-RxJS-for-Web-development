const PORT = 4001;
const HOST = '127.0.0.1';

var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(express.json()); // to support JSON-encoded bodies

counter = 6;
let data = [1,2,3,4,5];
/* Main routes */
app.get('/list-data', function(req, res) {

    count = 0;
    res.status(200).send({
        success: true,
        data: data
    });
    data = data.concat([counter++]);
});

app.listen(PORT, function() {
    console.log('Mock back-end is listening on port ' + PORT + '...');
});