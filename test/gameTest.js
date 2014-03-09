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
    game: 1
  }

  before(function(done) {
    done();
  });

  describe('API - No errors path', function() {

    it('should return status 201 after CREATING a game', function(done) {
      request(url)
        .post('/game/create')
        .send(game)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            res.should.have.status(201);
            done();
        });
    });

    it('should return a json containing an array of games', function(done){
      request(url)
        .get('/game')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if(err)
            return done(err)
          res.body.should.be.instanceof(Array);
          //assign the id to our game, so we can delete it later.
          var id = res.body[0]._id;
          game.id = id;
          done();
        });
    });

    it('should return status 200 after UPDATING a game', function(done) {
      request(url)
        .put('/game/1')
        .send({ name: 'Joguim dos Leleks 3 - Lesk\'s Ascencion',})
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            res.should.have.status(200);
            done();
        });
    });

    it('should return status 200 after DELETING a game', function(done) {
      request(url)
        .del('/game/1')
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            res.should.have.status(200);
            done();
        });
    });

    // it('should return status 404 after DELETING a game that does not exist', function(done) {
    //   request(url)
    //     .del('game/19')
    //     .end(function(err, res) {
    //         if (err) {
    //           throw err;
    //         }
    //         res.should.have.status(404);
    //         done();
    //     });
    // });
  //});
  //
  // describe('Views request', function(){
  //
  //   it('should return status 200 when requesting the main view', function(done) {
  //     request(url)
  //       .get('/')
  //       .end(function(err, res) {
  //         if(err){
  //           throw err;
  //         }
  //         res.should.have.status(200);
  //         done();
  //       });
  //   });
  //
  //   it('should return status 200 when requesting the emmiter view', function(done) {
  //     request(url)
  //       .get('/emmiter')
  //       .end(function(err, res) {
  //         if(err){
  //           throw err;
  //         }
  //         res.should.have.status(200);
  //         done();
  //       });
  //   });
  //
  //   it('should return status 200 when requesting the database view', function(done) {
  //     request(url)
  //       .get('/dbadmin')
  //       .end(function(err, res) {
  //         if(err){
  //           throw err;
  //         }
  //         res.should.have.status(200);
  //         done();
  //       });
  //   });
  });
});
