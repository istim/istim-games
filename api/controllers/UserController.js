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
    	Gamer.find(req.param('id')).done(function(err, games){
			return res.send(games);
    	});
	}
};

