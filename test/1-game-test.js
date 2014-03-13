/*var APIeasy = require('api-easy'),
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

var new_name='Joguim dos Leleks 3 - Rise of the TecnoLesk';
var new_description= 'Depois de jogar Joguim dos Leleks 2, conheça a continuação da saga em prol da lekzueragem new age.'

var new_systemRequirements= 'Um PC do Milhão';
var likes = 0;

suite.use('localhost', 1337)
  .setHeader('Content-Type', 'application/json')

  .discuss('create a game')
  .post('game/create', game)
    .expect(201)

.undiscuss()

  .discuss('get all games')
  .get('/game')
    .expect(200)

.undiscuss()

  .discuss('get a single game')
  .get('/game/10')
    .expect(200)
    .expect()
    .expect('game to be the one that was sent', function(err, res, body) {
      var resJson = JSON.parse(body);
      delete resJson['createdAt'];
      delete resJson['updatedAt'];

      assert.equal(JSON.stringify(resJson),
       JSON.stringify(game));
    })

.undiscuss()

  .discuss('update a game name')
  .put('/game/10',{name: 'Joguim dos Leleks 3 - Rise of the TecnoLesk'})
    .expect(200)
    .expect('successfully updates the game\'s name', function(err, res, body) {

    var resJson = JSON.parse(body);

    //console.log(JSON.stringify(resJson));

    assert.equal(resJson['name'], new_name);
   })

.undiscuss()

//   .discuss('update a game description')
//   .put('/game/10',{description: new_description})
//     .expect(200)
//     .expect('successfully updates the game\'s description', function(err, res, body) {
//       var resJson = JSON.parse(body);
//
//       //console.log(JSON.stringify(resJson));
//
//       assert.equal(resJson['description'], new_description);
//     })
//
// .undiscuss()

//   .discuss('update a game publisher')
//   .put('/game/10',{publisher: new_publisher})
//     .expect(200)
//     .expect('successfully updates the game\'s publisher', function(err, res, body){
//       var resJson = JSON.parse(body);
//
//       assert.equal(resJson['publisher'], new_publisher);
//     })
//
// .undiscuss()

  // .discuss('like a game')
  // .post('/game/10/like')
  //   .expect(200)
  //   .expect('successfully updates the game\'s like quantity', function(err, res, body) {
  //     var resJson = JSON.parse(body);
  //     assert.equal(resJson['likes'], ++likes);
  //   })

// .undiscuss()

  .discuss('update a game system requirement')
  .put('/game/10',{systemRequirements: new_systemRequirements})
    .expect(200)

.undiscuss()

  .discuss('delete a game')
  .del('/game/10')
    .expect(200)

.undiscuss()

.export(module)
*/