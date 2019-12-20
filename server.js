// Set Up Express/ Basic Server
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3075;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// *****Data*****


//*****Routes*****

//Home
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });


// *****Create Reservation*****


// *****Tell Server to Listen*****

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });