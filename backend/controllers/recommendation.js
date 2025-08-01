const Scholarship = require('../models/Scholarship');
const User = require('../models/User');

async function recommendScholarships(userId) {
  const user = await User.findById(userId);
  const profile = user.profile;

  // Simple rule/tag-based recommendation
  return Scholarship.find({
    category: profile.category,
    academicLevel: profile.academicLevel,
    gender: profile.gender,
    state: profile.state,
    income: { $gte: profile.income - 10000, $lte: profile.income + 10000 }
  }).limit(10);
}

module.exports = { recommendScholarships };