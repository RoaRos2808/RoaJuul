import React from 'react';
import styles from './ExtraPage.module.css';
import { BsSpotify } from 'react-icons/bs';
import { SiGooglekeep } from 'react-icons/si';

// interface HomePageProps {
//     path: string;
//   }

const ExtraPage: React.FC = () => {
  return (
    <div className={styles.ExtraPage}>
      <div className={styles.background}>
        <div className={styles.body}>
          <h1>Extra's</h1>
          <a href="https://open.spotify.com/playlist/37i9dQZF1EJDdwPuvRG9k7?si=68f00f5702ab48c4" className={styles.buttons}>
            <BsSpotify className={styles.spotify} />
          </a>
          <a href="https://keep.google.com/u/0/#LIST/1wHzOV_zNffAzMZdGz5ZwoORc9uFn80AuAau0wAtS4bwtpwDH6y6dLkkZWJrdhYzQ9ziL" className={styles.buttons}>
            <SiGooglekeep className={styles.google_keep} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExtraPage;
