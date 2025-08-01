const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Scholarship = require('./models/Scholarship');

const scholarships = [
  {
    title: "National Talent Search Exam (NTSE)",
    eligibility: "Indian students studying in Class 10",
    category: "General",
    academicLevel: "High School",
    gender: "Other",
    state: "All",
    income: 800000,
    link: "https://ncert.nic.in/national-talent-examination.php"
  },
  {
    title: "INSPIRE Scholarship",
    eligibility: "Science students in Class 12 or B.Sc.",
    category: "General",
    academicLevel: "Undergraduate",
    gender: "Other",
    state: "All",
    income: 500000,
    link: "https://online-inspire.gov.in/"
  },
  {
    title: "Post-Matric Scholarship for SC Students",
    eligibility: "SC students in post-matric courses",
    category: "SC",
    academicLevel: "Undergraduate",
    gender: "Other",
    state: "All",
    income: 250000,
    link: "https://scholarships.gov.in/"
  },
  {
    title: "Minority Scholarship",
    eligibility: "Minority students, Class 11-12",
    category: "OBC",
    academicLevel: "High School",
    gender: "Other",
    state: "All",
    income: 200000,
    link: "https://scholarships.gov.in/"
  },
  {
    title: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
    eligibility: "Science stream students",
    category: "General",
    academicLevel: "Undergraduate",
    gender: "Other",
    state: "All",
    income: 600000,
    link: "http://kvpy.iisc.ernet.in/"
  }
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await Scholarship.deleteMany({});
  await Scholarship.insertMany(scholarships);
  console.log("Sample scholarships seeded!");
  mongoose.disconnect();
}
seed();