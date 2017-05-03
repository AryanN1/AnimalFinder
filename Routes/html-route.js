var path = require("path");

//Route
moddule.export = function(app) {

    app.get("/Surveypage", function(require, res)); {

        //res.sendFile(path.join(__dirname, "/../public/Surveypage.html"));
    });

app.use(function(req, res) {
            //res.sendFile(path.join(__dirname, "/../public/home.html"));
