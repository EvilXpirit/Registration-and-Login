import React from 'react';
import './landingpage.css';

const LandingPage = ({ onLogout }) => {
  return (
    <div className="landing-page">
      <div className="navbar">
        <button>Dashboard</button>
        <button>Section 1</button>
        <button>Section 2</button>
        <button onClick={onLogout}>Log Out</button>
      </div>
      <div className="content">
        <h1>Welcome to the Landing Page</h1>
        <p>This is the landing page after login.</p>
        <p>Add your content here...</p>
      </div>
    </div>
  );
};

export default LandingPage;
