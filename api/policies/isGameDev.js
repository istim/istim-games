/**
 * isGameDev
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

 var developers = "53303b12ca220bc4110c436f";

 var isGameDevHelper = function(userId){
   if(developers == userId){
     console.log("\n\Is Game Dev\n\n");
     return true;
   }
   else
     console.log("\n\Is NOT Game Dev\n\n");
     return false;
 }

module.exports = function(req, res, next) {
  return next();
  
  if(isGameDevHelper(req.body.userId)) //sei que tá errado isso ai, mas é só a ideia :P
    return next();
 	else{
 		console.log("must be game dev");
    	return res.forbidden('You must be a game developer to perform this action.');
	}

};
