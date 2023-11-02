import React, { useEffect } from 'react';
import './Footer.css'; // Import your CSS file for styling
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const [value, setValue] = React.useState('/');
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <footer className="footer">
      <BottomNavigation
          showLabels
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction label="Home" value='/' icon={<HomeIcon />} />
          <BottomNavigationAction label="Timeline" value='/timeline' icon={<TimelineIcon />} />
        </BottomNavigation>
      {/* <div className="instagram-logo">
        <img src="/images/Instagram_logo.png" alt="Instagram Logo" />
      </div>
      <a className='insta-text' href="https://www.instagram.com/roaros/" target="_blank" rel="noopener noreferrer">
        roaros
      </a>
      <div className="instagram-logo">
        <img src="/images/Instagram_logo.png" alt="Instagram Logo" />
      </div>
      <a className='insta-text' href="https://www.instagram.com/julieboschh/" target="_blank" rel="noopener noreferrer">
        julieboschh
      </a> */}
    </footer>
  );
};

export default Footer;