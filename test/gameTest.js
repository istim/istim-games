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

    it('should return status 200 after UPDATING a game\'s name', function(done) {
      request(url)
        .put('/game/1')
        .send({name: new_name})
        .expect(200)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            assert.equal(res.body.name, new_name)
            done();
        });
    });

    it('should return status 200 after UPDATING a game\'s description', function(done) {
      request(url)
        .put('/game/1')
        .send({description: new_description})
        .expect(200)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            assert.equal(res.body.description, new_description)
            done();
        });
    });

    it('should return status 200 after UPDATING a game\'s publisher', function(done) {
      request(url)
        .put('/game/1')
        .send({publisher: new_publisher})
        .expect(200)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            assert.equal(res.body.publisher, new_publisher)
            done();
        });
    });

    it('should return status 200 after UPDATING a game\'s system requirements', function(done) {
      request(url)
        .put('/game/1')
        .send({systemRequirements: new_systemRequirements})
        .expect(200)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            assert.equal(res.body.systemRequirements, new_systemRequirements)
            done();
        });
    });

    it('should return status 200 after UPDATING send a like to a game', function(done) {
      request(url)
        .post('/game/1/like')
        .expect(200)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            assert.equal(res.body.likes, ++likes)
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

  });
});
