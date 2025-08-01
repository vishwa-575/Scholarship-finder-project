import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Scholarships from "./pages/Scholarships";
// ... import other pages

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/scholarships" element={<Scholarships />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;