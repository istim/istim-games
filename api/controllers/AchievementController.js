/**
 * AchievmentController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  create: function (req, res) {
    Game.findOne(req.body.game).done(function(err, game){

      if (!game) {
        return res.send(req.body.game, 422);
      }

      Achievement.create(req.body).done(function(err, ach) {
        return res.send(201, ach);
      });
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to AchievmentController)
   */
  _config: {}


};
