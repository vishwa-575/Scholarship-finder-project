const express = require('express');
const router = express.Router();
const Scholarship = require('../models/Scholarship');

// Add a scholarship (for demo/admin)
router.post('/', async (req, res) => {
  try {
    const sch = new Scholarship(req.body);
    await sch.save();
    res.json(sch);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get scholarships (with filtering)
router.get('/', async (req, res) => {
  try {
    const filter = {};
    ['category','academicLevel','gender','state'].forEach(f => {
      if(req.query[f]) filter[f] = req.query[f];
    });
    if (req.query.income) filter.income = { $gte: Number(req.query.income) };
    const scholarships = await Scholarship.find(filter);
    res.json(scholarships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;