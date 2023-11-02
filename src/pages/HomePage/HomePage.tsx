import React from 'react';
import './HomePage.css';

// interface HomePageProps {
//     path: string;
//   }

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <div className="background">
        <div className="body">
          <div>
            <h1>RoaJuul</h1>
          </div>
          <img src={"/images/20230408_232501.jpg"} className='front-image' />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
