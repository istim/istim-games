istim-games
============
[![Build Status](https://travis-ci.org/istim/istim-games.png?branch=master)](https://travis-ci.org/istim/istim-games)

Game manager API for the Istim Gaming Platform.
 
 
 
## Services
### Games
  - Publish game
    - ```POST to game/create```
  - Edit game info
     - ```PUT to game/:id```
  - Remove game
    - ```DELETE to game/:id```
  - Like a game
    - ```POST to game/:id/like```
  - Get all available games
    - ```GET to game/```
  - Get a  game
    - ```GET to game/:id```
 
### Achievements
  - Create achievements for a game
    - ```POST to achievement/create```
  - Edit achievements info
    - ```PUT to achievement/:id```
  - Remove achievement
    - ```DELETE to achievement/:id```
  - Get available achievements for a specific game
    - ```GET to game/:id/achievements```
  - Get all available achievements
    - ```GET to achievement/```
  - Get a  achievment
    - ```GET to achievement/:id```
 
## Dependencies
### User API
  - Authentication
  
