var APIeasy = require('api-easy'),
    assert = require('assert');

var suite = APIeasy.describe('Achievement');

var achievement = {
  title: 'Let\'s Lek',
  description: 'Domine o poder da zuera',
  icon: 'http://imgsapp.oimparcial.com.br/app/noticia_130321921166/2013/02/15/129893/20130215154254551863i.jpg',
  game: 10
}

suite.use('localhost', 1337)
  .setHeader('Content-Type', 'application/json')

  .discuss('create a achievement')
  .post('achievement/create', achievement)
    .expect(201)

suite.undiscuss()

  .discuss('list all achievements')
  .get('/achievement')
    .expect(200)

suite.undiscuss()

  .discuss('show one achievement')
  .get('/achievement/1')
    .expect(200)
    .expect('achievement to be the one that was sent', function(err, res, body) {
      var resJson = JSON.parse(body);
      delete resJson['createdAt'];
      delete resJson['updatedAt'];
      delete resJson['id'];

      console.log(JSON.stringify(resJson));

      assert.equal(JSON.stringify(resJson),
       JSON.stringify(achievement));
    })

.export(module)
