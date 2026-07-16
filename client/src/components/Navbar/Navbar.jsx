import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setHasToken(!!token);
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    if (logout) logout();
    setHasToken(false);
    navigate('/login');
    window.location.reload();
  };

  const userName = user?.name || "User";

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">EventHub</Link>
      </div>
      <div className="navbar-links">
        <Link to="/events">Events</Link>
        
        {hasToken ? (
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
