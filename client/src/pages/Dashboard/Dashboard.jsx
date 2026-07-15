import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();
  const [myEvents, setMyEvents] = useState([]);
  
  // Form State
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('Tech');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Dummy user events taaki screen active aur bhari hui lage
    setMyEvents([
      { id: 101, title: "My First Code Meetup", date: "2026-08-20", location: "Delhi", category: "Tech", description: "A local meetup for developers." }
    ]);
  }, []);

  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (!title || !date || !location) {
      alert("Please fill in all required fields.");
      return;
    }

    const newEvent = {
      id: Date.now(),
      title,
      date,
      location,
      category,
      description
    };

    // Naye event ko list me sabse upar add karna
    setMyEvents([newEvent, ...myEvents]);

    // Form clear karna
    setTitle('');
    setDate('');
    setLocation('');
    setDescription('');
    alert("🎉 Event Created Successfully!");
  };

  return (
    <div style={{
      padding: "2rem 3rem",
      background: "#0f172a",
      minHeight: "100vh",
      color: "#ffffff",
      fontFamily: "sans-serif"
    }}>
      {/* Header Section */}
      <div style={{ marginBottom: "2.5rem", borderBottom: "1px solid #1e293b", paddingBottom: "1rem" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "2rem", margin: "0 0 0.5rem 0" }}>
          Welcome back, {user?.name || "Organizer"}! 👋
        </h2>
        <p style={{ color: "#94a3b8", margin: 0 }}>Manage your created events and host new experiences.</p>
      </div>

      {/* Main Grid: Form Left, Events List Right */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2rem",
        alignItems: "start"
      }}>
        
        {/* Left Side: Create Event Form */}
        <div style={{
          background: "#1e293b",
          padding: "2rem",
          borderRadius: "12px",
          border: "1px solid #334155",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)"
        }}>
          <h3 style={{ margin: "0 0 1.5rem 0", color: "#38bdf8", fontSize: "1.3rem" }}>✨ Create New Event</h3>
          <form onSubmit={handleCreateEvent} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            
            <div>
              <label style={{ display: "block", color: "#94a3b8", marginBottom: "0.4rem", fontSize: "0.9rem" }}>Event Title *</label>
              <input 
                type="text" 
                placeholder="e.g. JavaScript Masterclass" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: "#94a3b8", marginBottom: "0.4rem", fontSize: "0.9rem" }}>Date *</label>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ display: "block", color: "#94a3b8", marginBottom: "0.4rem", fontSize: "0.9rem" }}>Category</label>
                <select 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                  style={inputStyle}
                >
                  <option value="Tech">Tech</option>
                  <option value="Workshops">Workshops</option>
                  <option value="Design">Design</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: "block", color: "#94a3b8", marginBottom: "0.4rem", fontSize: "0.9rem" }}>Location *</label>
              <input 
                type="text" 
                placeholder="e.g. Delhi or Online" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ display: "block", color: "#94a3b8", marginBottom: "0.4rem", fontSize: "0.9rem" }}>Description (Optional)</label>
              <textarea 
                placeholder="Describe your event details..." 
                value={description}
                rows="3"
                onChange={(e) => setDescription(e.target.value)}
                style={{ ...inputStyle, resize: "none" }}
              />
            </div>

            <button type="submit" style={{
              background: "#38bdf8",
              color: "#0f172a",
              border: "none",
              padding: "0.8rem",
              borderRadius: "6px",
              fontWeight: "700",
              cursor: "pointer",
              transition: "transform 0.1s, background 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.background = '#0ea5e9'}
            onMouseLeave={(e) => e.target.style.background = '#38bdf8'}
            >
              🚀 Publish Event
            </button>
          </form>
        </div>

        {/* Right Side: My Hosted Events */}
        <div>
          <h3 style={{ margin: "0 0 1.5rem 0", color: "#ffffff", fontSize: "1.3rem" }}>📍 Your Hosted Events</h3>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {myEvents.map(evt => (
              <div key={evt.id} style={{
                background: "#1e293b",
                borderLeft: "5px solid #38bdf8",
                padding: "1.2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.5rem" }}>
                  <h4 style={{ margin: 0, fontSize: "1.1rem", color: "#f1f5f9" }}>{evt.title}</h4>
                  <span style={{
                    background: "#0f172a",
                    color: "#38bdf8",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "12px",
                    fontSize: "0.75rem",
                    fontWeight: "600"
                  }}>{evt.category}</span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "0.85rem", margin: "0 0 0.8rem 0" }}>
                  📅 {evt.date} | 📍 {evt.location}
                </p>
                {evt.description && (
                  <p style={{ color: "#64748b", fontSize: "0.85rem", margin: 0 }}>
                    {evt.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// Common Input Style Object
const inputStyle = {
  width: "100%",
  padding: "0.6rem 0.8rem",
  background: "#0f172a",
  border: "1px solid #334155",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "0.9rem",
  outline: "none",
  boxSizing: "border-box"
};

export default Dashboard;