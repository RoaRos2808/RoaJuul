import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css'; // Import your CSS file for styling

const NavigationMenu: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Your Logo
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <div className="navbar-dropdown">
            <span className="navbar-link">About &#9662;</span>
            <div className="dropdown-content">
              <Link to="/about/company" className="dropdown-link">
                Company
              </Link>
              <Link to="/about/team" className="dropdown-link">
                Team
              </Link>
              {/* Add more dropdown links as needed */}
            </div>
          </div>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;