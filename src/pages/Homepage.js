import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Core Info Database</h1>
      <div className="buttons">
        <Link to="/promotions" className="button button-link">Promotions</Link>
        <Link to="/products" className="button button-link">Products</Link>
        <Link to="/influencers" className="button button-link">Influencers</Link>
      </div>
    </div>
  );
}

export default Homepage;