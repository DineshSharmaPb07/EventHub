import React from 'react';

const QRCodeComponent = ({ value }) => {
  return (
    <div className="qr-code-container">
      <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`} alt="Event Ticket QR Code" />
    </div>
  );
};

export default QRCodeComponent;
