var APIeasy = require('api-easy'),
    assert = require('assert');

var suite = APIeasy.describe('Game');

var game = {
  name: 'Joguim dos Leleks 2 - Lesk\'s Revenge',
  description: 'Depois de jogar Joguim dos Leleks, conheça a continuação da saga em prol da zuera.',
  releaseDate: new Date(),
  publisher: 1,
  likes: 0,
  systemRequirements: "Um PC que rode Crysis",
  id: 10
};

suite.use('localhost', 1337)
  .setHeader('Content-Type', 'application/json')

  .discuss('create a game')
  .post('game/create', game)
    .expect(201)

  .get('/game')
    .expect(200)

  .get('/game/10')
    .expect(200)

.export(module)