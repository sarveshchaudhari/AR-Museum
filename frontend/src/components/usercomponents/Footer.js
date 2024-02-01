import React from 'react';

export default function Footer() {
  return (
    <div 
      className="text-center py-3 fixed-bottom" 
      style={{
        background: 'linear-gradient(90deg, rgba(33, 150, 243, 0.9), rgba(3, 169, 244, 0.9))',
        color: 'white',
        backdropFilter: 'blur(10px)',
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s, background-color 0.3s',
        fontSize: '1rem',
        fontWeight: '500',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(90deg, rgba(3, 169, 244, 0.9), rgba(33, 150, 243, 0.9))';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'linear-gradient(90deg, rgba(33, 150, 243, 0.9), rgba(3, 169, 244, 0.9))';
        e.currentTarget.style.transform = 'translateY(0px)';
      }}
    >
      <i 
        className="fas fa-globe" 
        style={{ marginRight: '8px', fontSize: '1.2rem' }}
      ></i>
      Virtual Experience
    </div>
  );
}
