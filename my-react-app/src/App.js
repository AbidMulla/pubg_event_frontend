import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import ForgotPass from './Authentication/ForgotPass';
import ResetPass from './Authentication/ResetPass';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
