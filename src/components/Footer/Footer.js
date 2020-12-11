import React from 'react';
import './Footer.css';

let current_year = new Date().getFullYear();

function Footer() {
  return (
    <div className="Footer">
      <small>&#169; {current_year} Matthew Wei</small>
    </div>
  )
}

export default Footer;
