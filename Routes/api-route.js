var animalNames= require("./data/animals.js")

module.exports(animalNames);

app.get('/api/Surveypage', function(req, res){
		res.json(animalNames);
	});


app.post('/api/Surveypage', function(req, res){
