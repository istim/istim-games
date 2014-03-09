var should = require('should');
var request = require('supertest');

describe('Routing', function() {
  var url = 'http://localhost:1337';

  var game = {
    name: 'Joguim dos Leleks 2 - Lesk\'s Revenge',
    description: 'Depois de jogar Joguim dos Leleks, conheça a continuação da saga em prol da zuera.',
    releaseDate: new Date(),
    publisher: 1,
    likes: 0,
    systemRequirements: "Um PC que rode Crysis"
  };

  var achievment = {
    title: 'Let\'s Lek',
    decription: 'Domine o poder da zuera',
    icon: 'http://imgsapp.oimparcial.com.br/app/noticia_130321921166/2013/02/15/129893/20130215154254551863i.jpg',
    game: 5
  }

  before(function(done) {
    done();
  });

  describe('API - No errors path', function() {

    it('should return status 201 after CREATING a achievment for a game that exists', function(done) {
      request(url)
        .post('/game/create')
        .send(game)
        .post('/achievment/create')
        .send(achievment)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            res.should.have.status(201);
            done();
        });
    });

    it('should return a json containing an array of achievments', function(done){
      request(url)
        .get('/achievment')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if(err)
            return done(err)
          res.body.should.be.instanceof(Array);
          //assign the id to our game, so we can delete it later.
          var id = res.body[0]._id;
          achievment.id = id;
          done();
        });
    });

    it('should return status 200 after UPDATING a achievment', function(done) {
      request(url)
        .put('/achievment/1')
        .send({ title: 'Let\'s Lelek',})
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            res.should.have.status(200);
            done();
        });
    });

    it('should return status 200 after DELETING a achievment', function(done) {
      request(url)
        .del('/achievment/1')
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            res.should.have.status(200);
            done();
        });
    });
  });
});
