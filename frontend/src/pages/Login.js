import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.user._id);
      window.location.href = "/scholarships";
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
    setLoading(false);
  };

  return (
    <div className="fullpage-center">
      <form onSubmit={handleSubmit} style={{ minWidth: 300, background: "#fff", padding: "2em", borderRadius: 10, boxShadow: "0 2px 16px rgba(44,62,80,.09)" }}>
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Login</h2>
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
          {loading ? "Logging in..." : "Login"}
        </button>
        <div style={{ marginTop: 12, textAlign: "center", fontSize: 14 }}>
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </form>
    </div>
  );
}