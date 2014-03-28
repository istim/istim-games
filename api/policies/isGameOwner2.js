module.exports = function(req, res, next) {

	var http = require('http');

	var options = {
        host : "localhost",
        port : 1337,
        path : "/game/"+req.body.game,
        method : 'GET'
    };

	http.get(options, function(resp){
	  resp.on('data', function(chunk){
	    var game = JSON.parse(chunk);
	    if(game.status != "404"){
		    if(game.userId == parseInt(req.body.userId))
				return next();
			else
				return res.forbidden('You are not the game owner.');
		}
		else
			return res.send(422);
	  });
	}).on("error", function(e){
	  console.log("Got error: " + e.message);
	});
};