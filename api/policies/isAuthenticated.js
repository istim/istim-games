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
  if(authenticadedUsers.indexOf(userId) >= 0)
    return true;
  else
    return false;
}

module.exports = function(req, res, next) {

  if(authHelper(req.body.userId)) //sei que tá errado isso ai, mas é só a ideia :P
    return next();
  else
    return res.forbidden('You are not permitted to perform this action.');

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  // if (req.session.authenticated) {
  //   return next();
  // }
  //
  // // User is not allowed
  // // (default res.forbidden() behavior can be overridden in `config/403.js`)
  // return res.forbidden('You are not permitted to perform this action.');

  //only for mock reasons
  return next();
};
