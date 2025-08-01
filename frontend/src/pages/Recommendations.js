import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Recommendations() {
  const userId = localStorage.getItem('userId');
  const [scholarships, setScholarships] = useState([]);
  useEffect(() => {
    if (!userId) return;
    axios.get(`/api/recommendation/${userId}`)
      .then(res => setScholarships(res.data));
  }, [userId]);
  return (
    <div className="centered-content">
      <h2>Recommended Scholarships</h2>
      {scholarships.map(s => (
        <div className="scholarship-card" key={s._id}>{s.title}</div>
      ))}
    </div>
  );
}