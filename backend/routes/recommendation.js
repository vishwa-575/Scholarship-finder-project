const express = require('express');
const router = express.Router();
const { recommendScholarships } = require('../controllers/recommendation');

router.get('/:userId', async (req, res) => {
  const scholarships = await recommendScholarships(req.params.userId);
  res.json(scholarships);
});

module.exports = router;