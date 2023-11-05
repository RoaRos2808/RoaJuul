import React, { useState } from 'react';
import styles from './ExtraPage.module.css';
import { BsFillStarFill, BsSpotify } from 'react-icons/bs';
import { SiGooglekeep } from 'react-icons/si';

// interface HomePageProps {
//     path: string;
//   }

const ExtraPage: React.FC = () => {
  const images = require.context('/public/images/star_messages', false, /\.(jpg|jpeg|png)$/);
  const imageArray : string[] = images.keys().map((key: string) => images(key));

  const [randomImage, setRandomImage] = useState('');

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    setRandomImage(imageArray[randomIndex]);
  };
  
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
          <a onClick={handleButtonClick} className={styles.buttons}>
            <BsFillStarFill className={styles.star} />
            {randomImage && <img className={styles.front} src={randomImage} alt="Random" />}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExtraPage;
