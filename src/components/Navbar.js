import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">SBD Guide</h1>
        <div className="navbar-links">
          <Link to="/">Accueil</Link>
          <Link to="/squat">Squat</Link>
          <Link to="/bench">Bench Press</Link>
          <Link to="/deadlift">Deadlift</Link>
          <Link to="/muscle-map">Carte des Muscles</Link> {/* Nouveau lien */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
