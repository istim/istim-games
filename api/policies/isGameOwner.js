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

	    if(game.userId == parseInt(req.body.userId)){
				console.log("\n\Is Game Owner\n\n");
				return next();
			}
			else
				console.log("\n\Is NOT Game Owner\n\n");
				return res.forbidden('You are not the game owner.');
	  });
	}).on("error", function(e){
	  console.log("Got error: " + e.message);
	});
};
