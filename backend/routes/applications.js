const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// Bookmark/Apply/Track
router.post('/', async (req, res) => {
  const application = new Application(req.body);
  await application.save();
  res.json(application);
});

// Update Status
router.put('/:id', async (req, res) => {
  const app = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(app);
});

// Get Applications for User
router.get('/user/:userId', async (req, res) => {
  const apps = await Application.find({ user: req.params.userId }).populate('scholarship');
  res.json(apps);
});

module.exports = router;