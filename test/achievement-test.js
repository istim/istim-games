var APIeasy = require('api-easy'),
    assert = require('assert');

var suite = APIeasy.describe('Achievement');

var achievement = {
  title: 'Let\'s Lek',
  decription: 'Domine o poder da zuera',
  icon: 'http://imgsapp.oimparcial.com.br/app/noticia_130321921166/2013/02/15/129893/20130215154254551863i.jpg',
  game: 5
}

suite.use('localhost', 1337)
  .setHeader('Content-Type', 'application/json')

  //pode adicionar quantos expect quiser, e o assert ta importado la em cima
  .discuss('list all achievements')
  .get('/achievement')
    .expect(200)

suite.undiscuss()
  
  .discuss('show one achievement')
  .get('/achievement/1')
    .expect(200)

suite.undiscuss()

  .discuss('create a achievement')
  .post('achievement/create', achievement)
    .expect(201)


  .export(module);