var fs = require('fs')
var express = require('express');
var http = require('http')
var https = require('https')
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /confirm page.
app.get('/confirm', function (req, res) {
   console.log("Got a GET request for /confirm");
   res.send('Confirm received');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

server_options = {
   key  : fs.readFileSync('certs/key.pem'),
   cert : fs.readFileSync('certs/cert.pem')
 }

http.createServer(app).listen(80, function () {  console.log("App listening on 80");});
https.createServer(server_options, app).listen(443, function () {  console.log("App listening on 443");});
