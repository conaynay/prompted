'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const { UserProfile, GameHistory, UserHistory, Games } = require('./models');

app.use(express.static('public'));



if(require.main == module){
  app.listen(process.env.PORT || 8080, function () {
      console.info(`App listening on ${this.address().port}`);
  });
}

module.exports = app;
