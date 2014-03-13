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
    game: 5
  }

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
  });
});
