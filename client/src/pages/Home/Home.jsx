import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: '800px', margin: '6rem auto', padding: '3rem 2rem', textAlign: 'center', background: 'white', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.05)' }}>
      <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1rem', fontWeight: '800' }}> Welcome to <span style={{ color: '#38bdf8' }}>EventHub</span></h1>
      <p style={{ color: '#64748b', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
        Discover, organize, and track awesome events seamlessly with our all-in-one telemetry dashboard.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button 
          onClick={() => navigate('/dashboard')} 
          style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', fontWeight: '600', color: 'white', backgroundColor: '#38bdf8', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(56, 189, 248, 0.2)', transition: 'all 0.2s' }}
        >
          Go to Dashboard ??
        </button>
        
        <button 
          onClick={() => navigate('/events')} 
          style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', fontWeight: '600', color: '#0f172a', backgroundColor: '#f1f5f9', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s' }}
        >
          Explore Events ??
        </button>
      </div>
    </div>
  );
};

export default Home;
