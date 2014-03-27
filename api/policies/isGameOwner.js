/**
 * isValidUser
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
function httpGet(theUrl){
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, true );
    xmlHttp.send();
    var answer = xmlHttp.responseText;
    return answer;
}

module.exports = function(req, res, next) {
	var game = httpGet(req.body.gameId);

	if(game.userId == req.body.userId)
		return next();
	else
		return res.forbidden('You are not permitted to perform this action.');
};

