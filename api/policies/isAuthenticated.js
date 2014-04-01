/**
 * isAuthenticated
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

var authHelper = function(users, userId){
	for(var i = 0; i < users.length; i++){
		if(users[i].userId == userId){
			console.log("\n\nTRUEEEEEEEEEEEEEEEE\n\n");
			return true;
		}
	}
	return false;
}

module.exports = function(req, res, next) {
	var http = require('http');
	var userId = req.body.userId;
  var str = '';

	var options = {
	  hostname: 'istim-user.nodejitsu.com',
	  port: 80,
	  path: '/getAllAuthenticated',
	  method: 'GET'
	};

	var req = http.request(options, function(res) {
	  res.on('data', function (chunk) {
      str += chunk;
	  });

    res.on('end', function() {
      var users = JSON.parse(str);

      if(authHelper(users, userId)){
        return success();
      }
      else{
        return error();
      }
    });
	});
  
  req.end();

	var success = function(){
    	return next();
	}
  	var error = function() {
    	return res.forbidden('You must be logged in to perform this action.');
	}
};
