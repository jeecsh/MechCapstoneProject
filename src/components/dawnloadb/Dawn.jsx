import React from 'react';
import './dawn.css';

const Dawn = () => {
  const handleDownload = () => {
    const pdfUrl = '/pdf/ppp.pdf'; 
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'ppp.pdf';
    link.click();
  };

  return (
    <div className='raso'>
      <h2>click here to dawnload the report pdf</h2>
      <button className="bdb" onClick={handleDownload}>
        Download PDF
      </button>
    </div>
  );
};

export default Dawn



