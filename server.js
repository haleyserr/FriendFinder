// Set Up Express/ Basic Server
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3075;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// *****Tell Server to Listen*****

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });