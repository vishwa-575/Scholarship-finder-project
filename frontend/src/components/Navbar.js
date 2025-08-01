import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const loggedIn = !!localStorage.getItem('userId');
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <nav style={{
      background: "#6e8efb",
      color: "#fff",
      padding: "1em 2em",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div style={{ fontWeight: 'bold', fontSize: 22 }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Scholarship Portal</Link>
      </div>
      <div>
        {loggedIn && (
          <>
            <Link to="/scholarships" style={navStyle(location, "/scholarships")}>Scholarships</Link>
            <Link to="/applications" style={navStyle(location, "/applications")}>My Applications</Link>
            <Link to="/feedback" style={navStyle(location, "/feedback")}>Feedback</Link>
            <button onClick={handleLogout} style={{
              marginLeft: 16, background: "#fff", color: "#6e8efb", border: "none", borderRadius: 4, padding: "0.5em 1em", cursor: "pointer"
            }}>Logout</button>
          </>
        )}
        {!loggedIn && (
          <>
            <Link to="/" style={navStyle(location, "/")}>Login</Link>
            <Link to="/signup" style={navStyle(location, "/signup")}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

function navStyle(location, path) {
  return {
    marginLeft: 16,
    color: location.pathname === path ? "#ffe082" : "#fff",
    textDecoration: "none",
    fontWeight: location.pathname === path ? "bold" : "normal"
  };
}