import React, { useState } from 'react';
import axios from 'axios';

export default function Feedback() {
  const userId = localStorage.getItem('userId');
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/api/feedback', { user: userId, query });
    setQuery('');
    setMessage("Feedback submitted!");
    setTimeout(()=>setMessage(""), 2000);
  };
  return (
    <div className="centered-content">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter your feedback or query"
          required
          className="form-control"
          style={{minWidth:300,minHeight:80,marginBottom:12}}
        />
        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Submit</button>
      </form>
      {message && <div style={{ marginTop: 8, color: "#28a745" }}>{message}</div>}
    </div>
  );
}