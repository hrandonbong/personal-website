// app.js
var express = require('express');

// Define Express App
var app = express();
//var port = process.env.PORT || 8080;
app.set('port', 7106);

// Server Static Assets
app.use(express.static('public'));

//Virtual Path Prefix '/static'
app.use('/static', express.static('public'))


//If installed on a server
//app.listen(app.get('port'), function(){
//  console.log(`Express started on  http://${process.env.HOSTNAME}:${app.get('port')} press Ctrl-C to terminate.`);
//});

//For local host use
app.listen(app.get('port'), function(){
    console.log('Express started on  http://localhost:' + app.get('port') + ' press Ctrl-C to terminate.');
  });

















//Set up Routes
//app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname,'index.html'));
////});

//app.get('/favorite', function(req, res) {
   // res.sendFile(path.join(__dirname, 'favorite.html'));
//});









