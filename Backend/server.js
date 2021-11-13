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

<<<<<<< HEAD
// Listen to port 8000
// app.listen(8000, function () {
//   console.log('App listening on port 8000');
// });

app.listen(process.env.PORT || 8000, function () {
  console.log('App listening on port 8000');
});
=======
// Listen to port 
app.listen(process.env.PORT || 3000, function onListen() {
  console.log("Listning to port " + process.env.PORT || 3000)
 });
>>>>>>> fca84ad5b528f6814ebf6be003c453a14fae543d
