/**
 * isGameDev
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

 var developers = [0,1,2];

 var isGameDevHelper = function(userId){
   if(developers.indexOf(userId) >= 0)
     return true;
   else
     return false;
 }

module.exports = function(req, res, next) {
  if(isGameDevHelper(req.body.userId)) //sei que tá errado isso ai, mas é só a ideia :P
    return next();
  else
    return res.forbidden('You are not permitted to perform this action.');

};
