import React, { useState } from 'react';
import './style.css'; // Assuming your CSS file is named 'style.css'
import 'boxicons/css/boxicons.min.css'; // Ensure you have this in your project
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    alert('Validation passed, submitting the form.');
    // Handle form submission logic here
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordPattern.test(password);
  };

  return (
    <div className="wrapper" style={{padding:'68px'}}>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <i className='bx bxs-user'></i>
        </div>

        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <i className='bx bxs-envelope'></i>
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i className='bx bxs-lock-alt'></i>
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <i className='bx bxs-lock-alt'></i>
        </div>

        <button className="btn" type="submit">Sign Up</button>

        <div className="register-link">
          <p>Already have an account? <br /> <Link to="/login">Login</Link></p>
        </div>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default SignupForm;
