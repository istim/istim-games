module.exports = function(req, res, next) {

	var http = require('http');

	var options = {
        host : "localhost",
        port : 1337,
        path : "/game/"+req.params.id,
        method : 'GET'
    };

	http.get(options, function(resp){
	  resp.on('data', function(chunk){
	    var game = JSON.parse(chunk);

	    if(game.userId == parseInt(req.body.userId))
			return next();
		else
			return res.forbidden('You are not the game owner.');
	  });
	}).on("error", function(e){
	  console.log("Got error: " + e.message);
	});
};
