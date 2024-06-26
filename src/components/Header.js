import React, { useState } from 'react';
import '../styles/Header.css';
import yuLogo from '../assets/yu-logo.png'; 
import { Link } from 'react-router-dom';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header style={{ backgroundColor: 'black', color: 'white' }}>
      <div>
        <img src={yuLogo} alt="Yu Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li onClick={toggleDropdown} className={showDropdown ? 'active' : ''}>
            Core Info Database
            <ul className={`dropdown ${showDropdown ? 'show' : ''}`}>
              <li><Link to="/promotions">Promotions</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/influencers">Influencers</Link></li>
            </ul>
          </li>
          <li>N/A</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;