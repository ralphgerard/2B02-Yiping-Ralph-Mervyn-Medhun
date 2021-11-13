const express = require('express');
const path = require('path');
const ApiRouter = require('./routers/api');

// The web server
const app = express();


// To handle body
app.use(express.json());

// Web Server
app.use(express.static(path.join(__dirname, 'public')));

// APIs
app.use('/api', ApiRouter);

// TODO: 404 Handler

// TODO: Error Handler

// Listen to port 
app.listen(process.env.PORT || 3000, function onListen() {
  console.log("Listning to port " + process.env.PORT || 3000)
 });