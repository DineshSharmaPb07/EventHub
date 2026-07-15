import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();

  return (
    <div className="event-details-page">
      <h2>Event Specifications</h2>
      <p>Managing and viewing details for event item: {id}</p>
    </div>
  );
};

export default EventDetails;
