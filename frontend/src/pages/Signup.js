import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/auth/signup', form);
      alert("Signup successful! You can now login.");
      window.location.href = "/"; // login route
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
    setLoading(false);
  };

  return (
    <div className="fullpage-center">
      <form onSubmit={handleSubmit} style={{ minWidth: 300, background: "#fff", padding: "2em", borderRadius: 10, boxShadow: "0 2px 16px rgba(44,62,80,.09)" }}>
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Sign Up</h2>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="form-control"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="form-control"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="form-control"
        />
        <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: "100%", marginTop: 16 }}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
        <div style={{ marginTop: 12, textAlign: "center", fontSize: 14 }}>
          Already have an account? <a href="/">Login</a>
        </div>
      </form>
    </div>
  );
}