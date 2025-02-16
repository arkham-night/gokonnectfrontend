import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/pick-driver">Pick Driver</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/admin-login">Admin Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
