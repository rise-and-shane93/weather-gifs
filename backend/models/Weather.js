const mongoose = require('mongoose'); // eslint-disable-line import/no-commonjs

const WeatherData = mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  City: String,
  State: String,
  Zip: Number
});

module.exports = mongoose.model('WeatherData', WeatherData);