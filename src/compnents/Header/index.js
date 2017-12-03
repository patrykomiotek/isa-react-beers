import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    Komponent: Header
    <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/beers">List of beers</Link></li>
    </ul>
  </div>
);

export default Header;