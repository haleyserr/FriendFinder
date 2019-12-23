const friendsList = require("../data/friends.js");

module.exports = function (app) {


   //POST

   app.post("/api/friends", function (req, res) {


      //*****Comparison Logic*****

      //We need some working variables
      let newFriend = req.body.scores;
      let comparisonArray = [];

      // This feels so wierd but we are looping within a loop
      
      //Loop for friends
      for (let i = 0; i < friendsList.length; i++) {

         //Loop for Scores

         for (let j=0; j<newFriend.length; j++){

            //math.abs, absolute value - no negatives

            difference += (Math.abs(parseInt(friendsList[i].scores[j]) - parseInt(newFriend[j])))

         }

         comparisonArray.push(scoresDiff);

         //So the comparisonArray gives us the compatibilty for all friends, but we want the lowest number to find the best match for newFriend

         //Which means... another loop to walk through the comparisonArray

         let bestMatch=0 

         for (let i=0; i<comparisonArray.length; i++){

            

            if(comparisonArray[i] <= comparisonArray[bestMatch]){

               //Gives us index of lowest #, which should match the index of the friend object in friendsList

               bestMatch = i
            }

         }






      };

      // Moving New Friend POST to bottom so we aren't comparing someone's scores to their own

      friendsList.push(req.body);
      res.json(true);


   });



   //GET

  // app.get("/api/friends", function (req, res) {
    //  res.json(friendsList);
  // });





};