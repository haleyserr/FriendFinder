const path = require("path");


module.exports = function (app) {

    //home

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });


    //survey


    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });



    //default

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });


};