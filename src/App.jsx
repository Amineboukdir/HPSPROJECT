import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/registration";
import InstitutionForm from "./components/InstitutionForm";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleSignUpClick = () => {
    setShowLogin(false); // Show registration view
  };

  const handleSignInClick = () => {
    setShowLogin(true); // Show login view
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login onSignUpClick={handleSignUpClick} />} />
          <Route path="/register" element={<Registration onSignInClick={handleSignInClick} />} />
          <Route path="/institution" element={<InstitutionForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
