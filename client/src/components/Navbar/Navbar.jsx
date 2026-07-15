import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { authService } from '../../services/authService';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  // Local state login check karne ke liye
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setHasToken(!!token);
  }, [user, navigate]);

  const handleLogout = () => {
    authService.logout();
    logout();
    setHasToken(false);
    navigate('/login');
  };

  // Agar user name context se mile toh wo, nahi toh localStorage se backup check
  const userName = user?.name || "User";

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">EventHub</Link>
      </div>
      <div className="navbar-links">
        <Link to="/events">Events</Link>
        
        {hasToken || user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <span style={{ color: '#38bdf8', marginLeft: '1.5rem', fontWeight: '600' }}>
              Hi, {userName}
            </span>
            <button 
              onClick={handleLogout} 
              style={{ 
                marginLeft: '1.5rem', 
                background: '#ef4444', 
                color: 'white', 
                border: 'none', 
                padding: '0.4rem 1rem', 
                borderRadius: '4px', 
                cursor: 'pointer', 
                fontWeight: '600' 
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link> 
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;