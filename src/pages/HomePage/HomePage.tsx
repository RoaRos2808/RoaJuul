import React from 'react';
import styles from './HomePage.module.css';
import { Fade } from 'react-awesome-reveal';

// interface HomePageProps {
//     path: string;
//   }

const HomePage: React.FC = () => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.background}>
        <div className={styles.body}>
          <div className={styles.title}>
            <h1>RoaJuul</h1>
          </div>
          <Fade delay={250} className={styles.front_image}>
            <div>
              <p>
                Het is inmiddels een jaar geleden dat wij elkaar ontmoet hebben, en dit
                bracht mij op het idee om een website te maken met onze leukste herinneringen!
                In de timeline heb ik al onze leuke datums op chronologische volgorde gezet, met 
                kleine verhaaltjes vanuit mijn perspectief :)
              </p>
              <img src={"/RoaJuul/images/20230812_142406.jpg"} className={styles.image} />
            </div>
          </Fade>
          {/* <img src={"/images/bg_bggenerator_com4.png"} className={styles.front_image} /> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
