/**
 * Game
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

  	name: 'string',
  	releaseDate: 'date',
  	description: 'text',
  	userId: 'integer',
    url: 'string',
  	likes: 'integer',
  	systemRequirements: 'text'

  }

};
