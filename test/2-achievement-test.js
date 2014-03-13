/*var APIeasy = require('api-easy'),
    assert = require('assert');

var suite = APIeasy.describe('Achievement');

var game = {
  name: 'Joguim dos Leleks - Lek Begins',
  description: 'Conheça a primeira instância da saga Lek!',
  releaseDate: new Date(),
  publisher: 2,
  likes: 0,
  systemRequirements: "Um PC da Xuxa",
  id: 100
};

var achievement = {
  title: 'Let\'s Lek',
  description: 'Domine o poder da zuera',
  icon: 'http://imgsapp.oimparcial.com.br/app/noticia_130321921166/2013/02/15/129893/20130215154254551863i.jpg',
  game: 100,
  id: 1
};

var achievement2 = {
  title: 'Leskhuerage',
  description: 'Conquista secreta',
  icon: 'http://imgsapp.oimparcial.com.br/app/noticia_130321921166/2013/02/15/129893/20130215154254551863i.jpg',
  game: 100,
  id: 2
};

var new_title= 'Leeeet\'s Leeeeek';
var new_description= 'Sobrecarregue o poder da zuera';
var new_icon= 'http://s2.glbimg.com/BiOKNfC19n_I0me7_UOGHCtwfgA=/620x0/s.glbimg.com/jo/eg/f/original/2013/03/22/mg_5580.jpg';

suite.use('localhost', 1337)
  .setHeader('Content-Type', 'application/json')

  .discuss('create a achievement for an existing game')
  .post('game/create', game)
    .expect(201)
  .post('achievement/create', achievement)
    .expect(201)
  .post('achievement/create', achievement2)
    .expect(201)

.undiscuss()

  .discuss('list all achievements')
  .get('/achievement')
    .expect(200)

.undiscuss()

  .discuss('show one achievement')
  .get('/achievement/1')
    .expect(200)
    .expect('achievement to be the one that was sent', function(err, res, body) {
      var resJson = JSON.parse(body);
      delete resJson['createdAt'];
      delete resJson['updatedAt'];

      //console.log(JSON.stringify(resJson));

      assert.equal(JSON.stringify(resJson),
       JSON.stringify(achievement));
    })

.undiscuss()

  .discuss('delete game made for test')
  .del('/game/100')
    .expect(200)

//  .discuss('all game achievements must be deleted')
//  .get('/achievement/2')
//    .expect(404)
//  .get('/achievement/1')
//   .expect(404)

//   .discuss('update a achievment title')
//   .put('/achievment/1',{title: new_title})
//     .expect(200)
//     .expect('successfully updates the achievment\'s title', function(err, res, body) {
//
//     var resJson = JSON.parse(body);
//
//     //console.log(JSON.stringify(resJson));
//
//     assert.equal(resJson['title'], new_title);
//    })
//
// .undiscuss()
//
//   .discuss('update a achievment description')
//   .put('/achievment/1',{description: new_description})
//   .expect(200)
//   .expect('successfully updates the achievment\'s description', function(err, res, body) {
//
//   var resJson = JSON.parse(body);
//
//   //console.log(JSON.stringify(resJson));
//
//   assert.equal(resJson['description'], new_description);
//  })
//
// .undiscuss()
//
//   .discuss('update a achievment icon')
//   .put('/achievment/1',{description: new_icon})
//   .expect(200)
//   .expect('successfully updates the achievment\'s icon', function(err, res, body) {
//
//   var resJson = JSON.parse(body);
//
//   //console.log(JSON.stringify(resJson));
//
//   assert.equal(resJson['description'], new_icon);
//   })
//
// .undiscuss()
  


.export(module)
*/