import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ApplicationTracker() {
  const userId = localStorage.getItem('userId');
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    if (!userId) return;
    axios.get(`/api/applications/user/${userId}`)
      .then(res => setApplications(res.data));
  }, [userId]);
  return (
    <div className="centered-content">
      <h2>My Applications</h2>
      {applications.length === 0 ? (
        <div style={{textAlign: 'center', color: '#888', marginTop: '2em'}}>No applications yet.</div>
      ) : (
        applications.map(app => (
          <div className="scholarship-card" key={app._id}>
            <strong>{app.scholarship?.title}</strong> - <span>{app.status}</span>
          </div>
        ))
      )}
    </div>
  );
}