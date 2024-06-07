import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/registration";
import InstitutionForm from "./components/InstitutionForm";
import { CardProfile } from "./components/CardProfile";
import { Dashboard } from "./components/Dashboard";
import Home from "./home"; // Import the new Home component

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleSignUpClick = () => {
    setShowLogin(false); // Show registration view
  };

  const handleSignInClick = () => {
    setShowLogin(true); // Show login view
  };

  return (
    <MantineProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/home" element={<Home />} /> {/* Home route */}
            <Route path="/login" element={<Login onSignUpClick={handleSignUpClick} />} />
            <Route path="/register" element={<Registration onSignInClick={handleSignInClick} />} />
            <Route path="/institution" element={<InstitutionForm />} />
            <Route path="/card-profile" element={<CardProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;
