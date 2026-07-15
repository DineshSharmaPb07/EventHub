import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <Link to={`/events/${event.id}`}>View Details</Link>
    </div>
  );
};

export default EventCard;
