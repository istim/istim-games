/**
 * isValidUser
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

module.exports = function(req, res, next) {

	var game;

	var http = require('http');

	var options = {
        host : "localhost",
        port : 1337,
        path : "/game/"+req.body.gameId,
        method : 'GET'
    };

	var post_req = http.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {    	
        game = chunk;
        console.log("game:");
        console.log(game);
      });
  	});

	console.log("game de novo: \n"+game);

  	post_req.end();

  	console.log("game de novo1: \n"+game);

	if(game.userId == parseInt(req.body.userId))
		return next();
	else
		return res.forbidden('You are not permitted to perform this action.');
};
