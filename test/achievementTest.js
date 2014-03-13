var request = require("supertest")
var assert = require("assert");
var should = require("should");

describe('Routing', function() {
  var url = 'http://localhost:1337';

  var game = {
    name: 'Joguim dos Leleks 2 - Lesk\'s Revenge',
    description: 'Depois de jogar Joguim dos Leleks, conheça a continuação da saga em prol da zuera.',
    releaseDate: new Date(),
    publisher: 1,
    likes: 0,
    systemRequirements: "Um PC que rode Crysis",
    id: 5
  };

  var achievement = {
    title: 'Let\'s Lek',
    decription: 'Domine o poder da zuera',
    icon: 'http://imgsapp.oimparcial.com.br/app/noticia_130321921166/2013/02/15/129893/20130215154254551863i.jpg',
    game: 5,
    id: 1
  }

  var new_title= 'Leeeet\'s Leeeeek';
  var new_description= 'Sobrecarregue o poder da zuera';
  var new_icon= 'http://s2.glbimg.com/BiOKNfC19n_I0me7_UOGHCtwfgA=/620x0/s.glbimg.com/jo/eg/f/original/2013/03/22/mg_5580.jpg';


  describe('API - No errors path', function() {

    it('should return status 201 after CREATING a achievement for a game that exists', function(done) {
      request(url)
        .post('/game/create')
        .send(game)
        .expect(201)
        .end(function(err, res) {
          if (err) {
            throw err;
          }
        });

      request(url)
        .post('/achievement/create')
        .send(achievement)
        .expect(201)
        .end(function(err, res) {
            if (err) {
              throw err;
            }

            done();
        });
    });

    it('should return status 422 after CREATING a achievement for a game that DOES NOT exists', function(done) {
      var new_achievment = achievement;
      new_achievment.game=2;
      request(url)
        .post('/achievement/create')
        .send(new_achievment)
        .expect(422)
        .end(function(err, res) {
            if (err) {
              throw err;
            }

            done();
        });
    });

    it('should return status 200 after UPDATING a title of an achievement that exists', function(done) {

      request(url)
        .put('/achievement/1')
        .send({title: new_title})
        .expect(200)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            assert.equal(res.body.title, new_title)
            done();
        });
    });

    it('should return status 200 after UPDATING a description of an achievement that exists', function(done) {

      request(url)
        .put('/achievement/1')
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

    it('should return status 200 after UPDATING an icon of an achievement that exists', function(done) {

      request(url)
        .put('/achievement/1')
        .send({icon: new_icon})
        .expect(200)
        .end(function(err, res) {
            if (err) {
              throw err;
            }
            assert.equal(res.body.icon, new_icon)
            done();
        });
    });

    it('should return status 200 after DELETING a achievement for a game that exists', function(done) {
      request(url)
        .del('/achievement/1')
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
        .del('/game/5')
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
