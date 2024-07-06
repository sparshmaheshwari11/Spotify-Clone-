const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
  url: String,
});

songSchema.index({ title: 'text', artist: 'text', album: 'text', genre: 'text' });

module.exports = mongoose.model('Song', songSchema);
