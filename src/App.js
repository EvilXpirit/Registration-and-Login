import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './components/styles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  useEffect(() => {
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    const users = JSON.parse(sessionStorage.getItem('users')) || [];
    if (users.find(u => u.username === user.username && u.password === user.password)) {
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password. Please try again or register.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <h1>Welcome to the Website</h1>
          <Dashboard onLogout={handleLogout} />
        </>
      )}
    </div>
  );
}

export default App;
