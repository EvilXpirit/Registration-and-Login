import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showRegistration, setShowRegistration] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  const handleRegisterClick = () => {
    setShowRegistration(true);
  };

  const handleBackToLogin = () => {
    setShowRegistration(false);
  };

  return (
    <div className="center">
      {showRegistration ? (
        <RegistrationForm onBack={handleBackToLogin} />
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <button type="submit">Login</button>
          <p>Don't have an account? <button onClick={handleRegisterClick}>Register</button></p>
        </form>
      )}
    </div>
  );
};

export default Login;
