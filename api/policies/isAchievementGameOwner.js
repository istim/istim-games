/**
 * isAchievementGameOwner
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

  var http = require('http');
  var http2 = require('http');

  	var achievement;
	var options = {
        host : "localhost",
        port : 1337,
        path : "/achievement/"+req.params.id,
        method : 'GET'
    };

	http.get(options, function(resp){
	  resp.on('data', function(chunk){
	    achievement = JSON.parse(chunk);

	    var options2 = {
	        host : "localhost",
	        port : 1337,
	        path : "/game/"+achievement.game,
	        method : 'GET'
	    };
	    
	    http2.get(options2, function(resp){
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

	  });
	}).on("error", function(e){
	  console.log("Got error: " + e.message);
	});

};
