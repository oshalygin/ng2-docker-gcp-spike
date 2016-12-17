/* eslint-disable no-console */
var express = require( 'express');
var path = require( 'path');
var bodyParser = require( 'body-parser');
var open = require( 'open');

var application = express();
application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.json());

var port = process.env.PORT || 8080; 
application.use('/dist', express.static(path.join(__dirname, './dist')));

application.get('*', (request, response) => {
  var clientEntryPoint = path.join(__dirname, './dist/index.html');
  response.sendFile(clientEntryPoint);
});

application.listen(port, (error) => {
  if (!!error) {
    console.log(error.bold.red);
  }
  open('http://localhost:' + port);
  console.log('Serving API AT http://localhost:' + port);
});
