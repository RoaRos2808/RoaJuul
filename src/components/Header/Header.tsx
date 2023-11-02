import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS file for styling
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <FavoriteIcon />
        </div>
        {/* Add other navigation items here */}
      </div>
    </div>
  );
};

export default Header;