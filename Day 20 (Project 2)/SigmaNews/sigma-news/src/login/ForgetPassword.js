// components/ForgotPassword.js
import React, { useState } from 'react';

export default function ForgotPassword({ switchToLogin }) {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email);

    if (!user) {
      alert("User not found!");
    } else {
      alert("A password reset link (mock) has been sent to your email.");
      // You would send an email here in a real app.
    }
  };

  return (
    <form onSubmit={handleReset}>
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Enter your email" required
        value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Reset Password</button>
      <p onClick={switchToLogin}>Back to Login</p>
    </form>
  );
}
