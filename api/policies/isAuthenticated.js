/**
 * isAuthenticated
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
var authenticadedUsers = [0,1,2,3,4];

var authHelper = function(userId){
  if(authenticadedUsers.indexOf(parseInt(userId)) >= 0)
    return true;
  else
    return false;
}

module.exports = function(req, res, next) {
  if(authHelper(req.body.userId))
    return next();
  else
    return res.forbidden('You must be logged in to perform this action.');
};
