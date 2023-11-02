import React from 'react';
import styles from './OnboardingPage.module.css';

// interface HomePageProps {
//     path: string;
//   }
interface Props {
  onChildEvent: (data: any) => void;
}

const OnboardingPage: React.FC<Props> = ({onChildEvent}) => {
  const handleClick = () => {
    // Emit the event to the parent component
    const eventData = 'Data from child component';
    onChildEvent(eventData);
  };

  return (
    <div className={styles.onboarding}>
      <div className={styles.background}>
        <div className={styles.body}>
          <div className={styles.top}>
            <div>
                <h1>RoaJuul</h1>
            </div>
            <img src={"/images/20230408_232501.jpg"} className={styles.front_image} />
        </div>
        <button onClick={handleClick} className={styles.romantic_button}>Ons eerste jaar!</button>
        </div>
      </div>
    </div>
  );
}

export default OnboardingPage;