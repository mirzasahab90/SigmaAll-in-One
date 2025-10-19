// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';
import LoginPage from './login/LoginPage';
import SignUp from './login/SignUp';
import ForgetPassword from './login/ForgetPassword';

const isLoggedIn = () => localStorage.getItem('loggedIn') === 'true';

// ✅ Wrapper for conditional NavBar + routing
const AppWrapper = () => {
  const location = useLocation();
  const loggedIn = isLoggedIn();

  // ✅ Show NavBar only on logged-in pages
  const showNavBar = loggedIn && !['/login', '/signup', '/forgot-password'].includes(location.pathname);

  return (
    <div>
      {showNavBar && <NavBar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/signup" element={loggedIn ? <Navigate to="/" /> : <SignUp />} />
        <Route path="/forgot-password" element={loggedIn ? <Navigate to="/" /> : <ForgetPassword />} />

        {/* Protected Routes */}
        <Route path="/" element={loggedIn ? <News category="general" /> : <Navigate to="/login" />} />
        <Route path="/business" element={loggedIn ? <News category="business" /> : <Navigate to="/login" />} />
        <Route path="/entertainment" element={loggedIn ? <News category="entertainment" /> : <Navigate to="/login" />} />
        <Route path="/health" element={loggedIn ? <News category="health" /> : <Navigate to="/login" />} />
        <Route path="/science" element={loggedIn ? <News category="science" /> : <Navigate to="/login" />} />
        <Route path="/sports" element={loggedIn ? <News category="sports" /> : <Navigate to="/login" />} />
        <Route path="/technology" element={loggedIn ? <News category="technology" /> : <Navigate to="/login" />} />

        {/* Fallback: redirect all unknown paths */}
        <Route path="*" element={<Navigate to={loggedIn ? '/' : '/login'} />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
