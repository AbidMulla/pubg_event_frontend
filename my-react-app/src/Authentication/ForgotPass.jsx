import React, { useState } from 'react';
import './style.css'; // Ensure your CSS file is correctly linked
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
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

    return (
        <div className="wrapper"style={{padding:"55px"}}>
            <form id="forgot-password-form" onSubmit={handleSubmit}>
                <h1>Forgot Password</h1>

                <div className="input-box">
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <i className='bx bxs-envelope'></i>
                </div>

                {error && <p className="error">{error}</p>}

                <button className="btn" type="submit">Reset Password</button>

                <div className="register-link">
                    <p>Remember your password? <br /> <Link to ="/login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;
