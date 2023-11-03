import React from 'react';
import styles from './HomePage.module.css';

// interface HomePageProps {
//     path: string;
//   }

const HomePage: React.FC = () => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.background}>
        <div className={styles.body}>
          <div>
            <h1>RoaJuul</h1>
          </div>
          <div className={styles.front_image}>
            <p>
              Het is inmiddels een jaar geleden dat wij elkaar ontmoet hebben, en dit
              bracht mij op het idee om een website te maken met onze leukste herinneringen!
              In de timeline heb ik al onze leuke datums op chronologische volgorde gezet, met 
              kleine verhaaltjes vanuit mijn perspectief :)
            </p>
          </div>
          {/* <img src={"/images/bg_bggenerator_com4.png"} className={styles.front_image} /> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
