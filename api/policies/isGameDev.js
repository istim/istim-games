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
 	console.log(typeof(developers)+" - "+typeof(userId));
 	console.log(developers);
 	console.log(userId);
   if(developers == userId){
     return true;
   }
   else
     return false;
 }

module.exports = function(req, res, next) {
  if(isGameDevHelper(req.body.userId)) //sei que tá errado isso ai, mas é só a ideia :P
    return next();
 	else{
 		console.log("must be game dev");
    	return res.forbidden('You must be a game developer to perform this action.');
	}	

};
