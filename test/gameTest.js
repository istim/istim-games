var request = require("supertest")
var assert = require("assert");
var should = require("should");

describe('Routing', function() {
  var url = 'http://localhost:1337';

  var game = {
    name: 'Joguim dos Leleks - Lesk\'s Origin',
    description: 'Joguim dos Leleks, a origem das lelekagens',
    releaseDate: new Date(),
    publisher: 1,
    likes: 0,
    id: 1,
    systemRequirements: "Um PC que da Xuxa"
  };

  var new_name='Joguim dos Leleks 3 - Rise of the TecnoLesk';
  var new_description= 'Depois de jogar Joguim dos Leleks 2, conheça a continuação da saga em prol da lekzueragem new age.';
  var new_publisher=2;
  var new_systemRequirements= 'Um PC do Milhão';
  var likes = 0;

  describe('API - No errors path', function() {

    it('should return status 201 after CREATING a game', function(done) {
      request(url)
        .post('/game/create')
        .send(game)
        .expect(201)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            done();
        });
    });

    it('should return status 200 after UPDATING a game', function(done) {
      request(url)
        .put('/game/1')
        .send({ name: 'Joguim dos Leleks 3 - Lesk\'s Ascencion',})
        .expect(200)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            done();
        });
    });

    it('should return status 200 after DELETING a game', function(done) {
      request(url)
        .del('/game/1')
        .expect(200)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
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
