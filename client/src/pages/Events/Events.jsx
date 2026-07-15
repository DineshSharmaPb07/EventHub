import React, { useState, useEffect } from "react";
import EventCard from "../../components/EventCard/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Thoda aur realistic data categories ke sath
    setEvents([
      { id: 1, title: "Tech Conference 2026", date: "2026-08-15", location: "Delhi", category: "Tech" },
      { id: 2, title: "Web Dev Workshop", date: "2026-09-02", location: "Mumbai", category: "Workshops" },
      { id: 3, title: "UI/UX Design Bootcamp", date: "2026-10-10", location: "Bangalore", category: "Design" },
      { id: 4, title: "AI & ML Summit", date: "2026-11-05", location: "Online", category: "Tech" },
      { id: 5, title: "Creative Writing Class", date: "2026-12-01", location: "Pune", category: "Workshops" }
    ]);
  }, []);

  // Filter Logic: Jo search term aur category dono ko handle karega
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Tech", "Workshops", "Design"];

  return (
    <div style={{ 
      padding: "2rem 3rem", 
      background: "#0f172a", 
      minHeight: "100vh", 
      color: "#ffffff",
      fontFamily: "sans-serif"
    }}>
      {/* Header Section */}
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#38bdf8", fontSize: "2rem", fontWeight: "700", margin: "0 0 0.5rem 0" }}>
          Explore Events
        </h2>
        <p style={{ color: "#94a3b8", margin: 0 }}>Find and register for the best upcoming events</p>
      </div>

      {/* Search & Filter Controls */}
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "1rem", 
        marginBottom: "2.5rem",
        background: "#1e293b",
        padding: "1.5rem",
        borderRadius: "12px",
        border: "1px solid #334155"
      }}>
        {/* Search Input */}
        <div style={{ position: "relative", width: "100%" }}>
          <span style={{ position: "absolute", left: "15px", top: "12px", color: "#94a3b8" }}>🔍</span>
          <input 
            type="text" 
            placeholder="Search by title or location..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem 1rem 0.75rem 2.5rem",
              background: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "1rem",
              outline: "none",
              boxSizing: "border-box"
            }}
          />
        </div>

        {/* Category Pills */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ color: "#94a3b8", fontSize: "0.9rem", marginRight: "0.5rem" }}>Categories:</span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                border: "1px solid",
                borderColor: selectedCategory === cat ? "#38bdf8" : "#334155",
                background: selectedCategory === cat ? "#38bdf8" : "transparent",
                color: selectedCategory === cat ? "#0f172a" : "#94a3b8",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "0.85rem",
                transition: "all 0.2s"
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
          gap: "1.5rem" 
        }}>
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div style={{ 
          textAlign: "center", 
          padding: "3rem", 
          background: "#1e293b", 
          borderRadius: "12px", 
          color: "#94a3b8" 
        }}>
          No events found matching your search.
        </div>
      )}
    </div>
  );
};

export default Events;