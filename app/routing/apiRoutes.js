const friendsList = require("../data/friends.js");

module.exports = function(app) {


   //POST

   app.post("/api/friends", function(req, res){

      friendsList.push(req.body);
      res.json(true);

   });



   //GET
   app.get("/api/friends", function(req, res) {
      res.json(friendsList);
    });





};
