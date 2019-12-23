// Set Up Express/ Basic Server
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3075;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


// *****Tell Server to Listen*****

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });