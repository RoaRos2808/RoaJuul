import React, { useState } from 'react';
import styles from './OnboardingPage.module.css';
import { Fade } from 'react-awesome-reveal';

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

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    // Check if the input value is "hello" and emit custom event
    if (newValue.toLowerCase() === "flirt") {
      const eventData = 'Data from child component';
      onChildEvent(eventData);
    }
  };

  return (
    <div className={styles.onboarding}>
      <div className={styles.background}>
        <div className={styles.body}>
          <div className={styles.top}>
            <div>
              <Fade delay={500} duration={2000}>
                <h1>RoaJuul</h1>
              </Fade>
            </div>
            <Fade delay={1500} duration={2000} className={styles.front_image}>
              <img src={"/RoaJuul/images/20230408_232501.jpg"} className={styles._img} />
            </Fade>
          </div>
          <Fade delay={3000} duration={500}>
            <input
              type="text"
              id="textInput"
              value={inputValue}
              onChange={handleInputChange}
              style={{textAlign: 'center'}}
              className={styles.romantic_input}
              placeholder="Ons eerste jaar!"
            />
          </Fade>
        {/* <button onClick={handleClick} className={styles.romantic_button}>Ons eerste jaar!</button> */}
        </div>
      </div>
    </div>
  );
}

export default OnboardingPage;
