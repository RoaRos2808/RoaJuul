import React from 'react';
import styles from './ExtraPage.module.css';
import { BsSpotify } from 'react-icons/bs';
import { Fade } from 'react-awesome-reveal';
import { Spotify } from 'react-spotify-embed';

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
            <BsSpotify />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExtraPage;
