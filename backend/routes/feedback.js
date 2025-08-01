const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.json({ message: "Feedback submitted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;