import React, { useState } from 'react';
import './style.css'; // Assuming your CSS file is named 'style.css'
import 'boxicons/css/boxicons.min.css'; // Ensure you have this in your project
import { Link } from 'react-router-dom';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
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
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

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

        <div className="remember-forgot">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </label>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <button className="btn" type="submit">Login</button>

        <div className="register-link">
          <p>Don't have an account? <br /> <Link to ="/register">Register</Link></p>
        </div>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
