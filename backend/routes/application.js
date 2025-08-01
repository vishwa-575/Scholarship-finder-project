const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const Scholarship = require('../models/Scholarship');

router.post('/', async (req, res) => {
  try {
    const { user, scholarship } = req.body;
    const app = new Application({ user, scholarship });
    await app.save();
    res.json(app);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    const apps = await Application.find({ user: req.params.id }).populate('scholarship');
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;