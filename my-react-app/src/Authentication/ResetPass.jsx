import React, { useState } from 'react';
import './style.css'; // Make sure to include your CSS file
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPasswordChange = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="wrapper" style={{padding:'60px'}}>
            <form action="">
                <h1>Reset Password</h1>

                <div className="input-box">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="new-password"
                        placeholder="New Password"
                        required
                    />
                    <i className='bx bxs-lock-alt'></i>
                </div>

                <div className="input-box">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="confirm-password"
                        placeholder="Confirm New Password"
                        required
                    />
                    <i className='bx bxs-lock-alt'></i>
                </div>

                <div className="remember-forgot">
                    <label>
                        <input
                            type="checkbox"
                            id="show-password"
                            checked={showPassword}
                            onChange={handleShowPasswordChange}
                        />
                        Show Password
                    </label>
                </div>

                <button className="btn" type="submit">Update Password</button>

                <div className="register-link">
                    <p>Remember your password? <br /> <Link to ="/login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;
