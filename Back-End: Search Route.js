const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

router.get('/search', async (req, res) => {
  const query = req.query.q;
  try {
    const results = await Song.find({ $text: { $search: query } });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
