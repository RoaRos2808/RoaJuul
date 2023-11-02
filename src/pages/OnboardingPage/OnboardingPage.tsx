import React from 'react';
import './OnboardingPage.css';

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
    <div className="onboarding">
      <div className="background">
        <div className="body">
          <div className="top">
            <div>
                <h1>RoaJuul</h1>
            </div>
            <img src={"/images/20230408_232501.jpg"} className='front-image' />
        </div>
        <button onClick={handleClick} className="romantic-button">Ons eerste jaar!</button>
        </div>
      </div>
    </div>
  );
}

export default OnboardingPage;
