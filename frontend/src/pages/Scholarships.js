import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CATEGORY_OPTIONS = ['', 'SC', 'ST', 'OBC', 'General'];
const ACADEMIC_LEVEL_OPTIONS = ['', 'High School', 'Undergraduate', 'Postgraduate', 'PhD'];
const GENDER_OPTIONS = ['', 'Male', 'Female', 'Other'];
const STATE_OPTIONS = [
  '', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

export default function Scholarships() {
  const [scholarships, setScholarships] = useState([]);
  const [filters, setFilters] = useState({
    category: '', academicLevel: '', gender: '', state: '', income: ''
  });

  const handleChange = e =>
    setFilters({ ...filters, [e.target.name]: e.target.value });

  useEffect(() => {
    axios.get('/api/scholarships', { params: filters })
      .then(res => setScholarships(res.data));
  }, [filters]);

  const userId = localStorage.getItem('userId');

  const handleApply = async (scholarshipId) => {
    if (!userId) {
      alert("Please log in first.");
      return;
    }
    await axios.post('/api/applications', { user: userId, scholarship: scholarshipId });
    alert("Application submitted. Track in My Applications.");
  };

  return (
    <div>
      <h2>Scholarships</h2>
      <div className="centered-form-wrapper">
        <form className="form-filters row g-2">
          <select name="category" onChange={handleChange} className="form-select">
            {CATEGORY_OPTIONS.map(opt =>
              <option key={opt} value={opt}>{opt ? opt : 'Category'}</option>
            )}
          </select>
          <select name="academicLevel" onChange={handleChange} className="form-select">
            {ACADEMIC_LEVEL_OPTIONS.map(opt =>
              <option key={opt} value={opt}>{opt ? opt : 'Academic Level'}</option>
            )}
          </select>
          <select name="gender" onChange={handleChange} className="form-select">
            {GENDER_OPTIONS.map(opt =>
              <option key={opt} value={opt}>{opt ? opt : 'Gender'}</option>
            )}
          </select>
          <select name="state" onChange={handleChange} className="form-select">
            {STATE_OPTIONS.map(opt =>
              <option key={opt} value={opt}>{opt ? opt : 'State'}</option>
            )}
          </select>
          <input
            name="income"
            onChange={handleChange}
            className="form-control"
            placeholder="Income"
            type="number"
            min="0"
          />
        </form>
      </div>
      {scholarships.length === 0 ? (
        <div style={{textAlign: 'center', color: '#888', marginTop: '2em'}}>No scholarships found.</div>
      ) : (
        scholarships.map(s => (
          <div className="scholarship-card" key={s._id}>
            <h3>{s.title}</h3>
            <p>{s.eligibility}</p>
            <a href={s.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary" style={{marginRight: 8}}>
              Visit Website
            </a>
            <button className="btn btn-primary" onClick={() => handleApply(s._id)}>Apply</button>
          </div>
        ))
      )}
    </div>
  );
}