import React from 'react';

const footerStyle = {
  backgroundColor: '#1e3a8a', // Tailwind's bg-blue-900 equivalent
  color: 'white',
  padding: '16px 0', // py-4 equivalent
  textAlign: 'center',
  marginBottom: 0,
  position: 'fixed', // Set position to fixed
  left: 0,
  bottom: 0,
  width:'100%'}
function Footer() {
  return (
    <div>
      <footer style={footerStyle}>
        © 2024 BookMeter. All rights reserved.
      </footer>
    </div>
  );
}

export default Footer;
