/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var request = require('request');

module.exports = {
	
	buy: function (req, res){

		Game.findOne(req.param('gameId')).done(function(err, game) {

  		var urlShow = "http://istimcoinvirtual.jit.su/coin/show?userId=" + req.param('userId');
  		var urlDebit = "http://istimcoinvirtual.jit.su/coin/debit?userId=" + req.param('userId') +
  			"&cash=" + game.price;

			request(urlShow, function (error, response, body) {
			  if (error) {
			    res.send(500, body);
			  } else {
			  	if (response.status == 404) {
			  		res.send(404, "User not found");
			  	} else {

			  		request(urlDebit, function (e, r, b) {
			  			console.log(b);

			  			if (!JSON.parse(b).error) {
			  				Gamer.create({userId: req.param('userId'), gameId: req.param('gameId')}, function(err, gamer) {
							    // value has been saved
							  });
			  			}

			  			return res.send(200, b);
			  		});

			  	}

			  }
			});
  	});
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
			
			return res.json(result);
		}); 

	}
};
