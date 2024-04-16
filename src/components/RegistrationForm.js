import React, { useState } from 'react';

const RegistrationForm = ({ onBack }) => {
  const [formData, setFormData] = useState({ fullName: '', email: '', mobileNo: '', username: '', password: '' });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(sessionStorage.getItem('users')) || [];
    sessionStorage.setItem('users', JSON.stringify([...users, formData]));
    setIsRegistered(true);
  };

  return (
    <div className="center">
      {!isRegistered ? (
        <form onSubmit={handleSubmit}>
          <h1>Registration</h1>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Id" value={formData.email} onChange={handleChange} />
          <input type="text" name="mobileNo" placeholder="Mobile No" value={formData.mobileNo} onChange={handleChange} />
          <input type="text" name="username" placeholder="User Name" value={formData.username} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <button type="submit">Register</button>
          <button type="button" onClick={onBack}>Back to Login</button>
        </form>
      ) : (
        <>
          <p>Registration successful!</p>
          <button onClick={onBack}>Back to Login</button>
        </>
      )}
    </div>
  );
};

export default RegistrationForm;
