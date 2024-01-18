import React from 'react';
import './dawn.css';

const Dawn = () => {
  const handleDownload = () => {
    const pdfUrl = '/pdf/oooo.pptx'; 
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'bipowertracker2.pptx';
    link.click();
  };

  return (
    <div className='raso'>
      <h2>click here to download </h2>
      <button className="bdb" onClick={handleDownload}>
        Download 
      </button>
    </div>
  );
};

export default Dawn



