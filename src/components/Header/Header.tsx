import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Import your CSS file for styling
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_logo}>
          <FavoriteIcon />
        </div>
        {/* Add other navigation items here */}
      </div>
    </div>
  );
};

export default Header;