'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL} = require('../config');
const mongoose = require('mongoose');
const {userProfile, gameHistory, userHistory, games } = require('../models');

const expect = chai.expect;

chai.use(chaiHttp);

function seedUserData() {
  console.log('seeding user data');
  const seedUserData = [];
  console.log('this is a TEST');
  for (let i=1; i<=10; i++) {
    seedUserData.push(generateUserProfileData());
  }
  return userProfile.insertMany(seedUserData);
}

function seedGameHistoryData() {
  console.log('seeding game history data');
  const seedGameHistoryData = [];
  for (let i=1; i<=10; i++) {
    seedGameHistoryData.push(generateGameHistoryData());
  }
  return gameHistory.insertMany(seedGameHistoryData);
}

function seedUserHistoryData() {
  console.log('seeding user history data');
  const seedUserHistoryData = [];
  for (let i=1; i<=10; i++) {
    seedUserHistoryData.push(generateUserHistoryData());
  }
  return userHistory.insertMany(seedUserData);
}

// function seedGameData() {
//   console.log('seeding user data');
//   const seedGameData = [];
//   for (let i=1; i<=10; i++) {
//     seedGameData.push(generatePostData());
//   }
//   return games.insertMany(seedGameData);
// }

function generateUserProfileData() {
  return {
    'user_id': faker.random.number(),
    'username': faker.internet.userName(),
    // 'password': faker.im
    'avatar': faker.image.imageUrl(),
    'games': faker.random.number(),
    'texts': faker.random.number(),
    'achievements': [1,3],
    'bio': faker.lorem.sentence(),
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

function tearDownDb() {
  console.warn('Deleting database');
  return mongoose.connection.dropDatabase();
}

describe('Blog posts API resource', function() {
  before(function() {
    return runServer(TEST_DATABASE_URL);
  });
  beforeEach(function(){
    return seedUserData();
    // return seedGameHistoryData();
    // return seedUserHistoryData();
  });
  afterEach(function(){
    return tearDownDb();
  });
  after(function(){
    return closeServer();
  });

  describe('index page', function(){
    it('should display index.html', function(){
      return chai.request(app)
        .get('/')
        .then(function(res){
          expect(res).to.have.status(200);
        });
    });
    it('should take you to sign in/up prompt',function(){
      return chai.request(app)
        .get('/auth/')
    });
  });
});
