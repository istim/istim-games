var APIeasy = require('api-easy'),
    assert = require('assert');

var suite = APIeasy.describe('Game');

suite.use('localhost', 1337)
  .setHeader('Content-Type', 'application/json')

  .get('/game')
    .expect(200)

  .get('/game/5')
    .expect(200)





  .export(module);