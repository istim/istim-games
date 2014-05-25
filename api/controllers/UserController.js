/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	buy: function (req, res){
    	Gamer.create({userId: req.param('userId'), gameId: req.param('gameId')}).done(function(err, gamer){
    		return res.send(201);
    	})
	},

	games: function (req, res){
		var gameIds;
		var result = [];
		Gamer.find().where({userId: req.param('id')}).exec(function(err, games) {
			//console.log(games);
			var gameIds = games;
			//return res.json(games);
			for(var i = 0; i < gameIds.length; i++){
				result.push(gameIds[i].gameId);
			}
			console.log(result);
			return res.json(result);
		}); 

	}
};

