'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const app = require('../server.js');

const expect = chai.expect;

chai.use(chaiHttp);

function generateUserProfileData() {
  return {
    'user_id': faker.random.number(),
    'username': faker.internet.userName(),
    'avatar': faker.image.imageUrl(),
    'games': faker.random.number(),
    'texts': faker.random.number(),
    'achievements': [1,3],
    'bio': faker.lorem.text(),
    'created': Date.now()
  };
};

function generateGameHistoryData() {
  return {
    'game_id': faker.random.number(),
    'game': faker.random.number(),
    'time_format': '30_min',
    'timestamp': Date.now(),
    'player': 2,
    'move': 4,
    'text': faker.lorem.text(),
    'active': random.boolean()
  };
};

function generateUserHistoryData() {
  return {
    'user_id': faker.random.number(),
    'game_id': faker.random.number(),
    'game': faker.random.number(),
    'player': faker.random.number()
  };
};

describe('index page', function(){
  it('should display index.html', function(){
    return chai.request(app)
      .get('/')
      .then(function(res){
        expect(res).to.have.status(200);
      });
  });
});
