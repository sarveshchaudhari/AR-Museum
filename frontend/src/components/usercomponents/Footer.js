import React from 'react';

export default function Footer() {
  return (
    <div 
      className='text-center py-3 text-white fixed-bottom' 
      style={{ 
        backgroundColor: 'rgba(33, 150, 243, 0.8)', 
        backdropFilter: 'blur(10px)', 
        transition: '0.3s',
        fontSize: '1rem',
        fontWeight: '500',
      }}
    >
      Virtual Experience
    </div>
  );
}
