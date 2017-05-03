// Dependencies

	var express=require("express");
	var bodyParser=require("body-parser");
	var path=require("path");


// Express

var app= express();
var PORT= process.env.PORT||3000;

app.use(bodyParser.json);

app.listen(PORT, function(){
	console.log("app listing on port:" + port)
}

	)

