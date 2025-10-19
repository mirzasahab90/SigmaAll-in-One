// components/Signup.js
import React, { useState } from 'react';
import bcrypt from 'bcryptjs';

export default function Signup({ switchToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.find(user => user.email === email);
    if (userExists) {
      alert('User already exists!');
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ email, password: hashedPassword });

    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful!');
    switchToLogin();
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" required value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input type={visible ? "text" : "password"} placeholder="Password" required
        value={password} onChange={(e) => setPassword(e.target.value)} />
      <label>
        <input type="checkbox" onChange={() => setVisible(!visible)} />
        Show Password
      </label>
      <button type="submit">Sign Up</button>
      <p onClick={switchToLogin}>Already have an account? Login</p>
    </form>
  );
}
