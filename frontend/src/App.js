import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Scholarships from "./pages/Scholarships";
import ApplicationTracker from "./pages/ApplicationTracker";
import Feedback from "./pages/Feedback";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/applications" element={<ApplicationTracker />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}
export default App;