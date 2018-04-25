'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const userProfileSchema = mongoose.Schema({
  'user_id': {type: Number, required: true},
  'username': {type: String, minlength: 4, maxlength: 20, trim: true},
  'avatar': {type: String},
  'games': {type: Number},
  'texts': {type: Number},
  'achievements': [],
  'bio': {type: String, minlength: 15, maxlength: 72},
  'created': {type: Date, default: Date.now},
  'last_active': {type: Date}
});

const gameHistorySchema = mongoose.Schema({
  'game_id': {type: Number, required: true},
  'game': {type: String, minlength: 4, maxlength: 20},
  'time_format': {type: String},
  'timestamp': {type: Date},
  'player': {type: Number},
  'move': {type: Number},
  'text': {type: String},
  'active': {type: Number}
});

const userHistorySchema = mongoose.Schema({
  'user_id': {type: Number, required: true},
  'game_id': {type: Number, required: true},
  'game': {type: Number, required: true},
  'player': {type: Number, required: true}
});

const gamesSchema = mongoose.Schema({
  'game': {type: Number, required: true},
  'game_name': {type: String, required: true},
  'max_players': {type: Number, required: true},
  'chars': {type: Number, required: true},
  'min_words': {type: Number, required: true},
  'max_words': {type: Number, required: true},
  'category': {type: String, required: true},
  'subcategory': {type: String, required: true},
  'prompt': {type: String, required: true}
});

const achievements = mongoose.Schema({
  'achieve_id': {type: Number, required: true},
  'achieve_name': {type: String, required: true}
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);
const GameHistory = mongoose.model('GameHistory', userProfileSchema);
const UserHistory = mongoose.model('UserHistory', userHistorySchema);
const Games = mongoose.model('Games', gamesSchema);


module.exports = {UserProfile, GameHistory, UserHistory, Games};
