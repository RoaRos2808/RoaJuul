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
          <img src={"/images/20230408_232501.jpg"} className={styles.front_image} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
