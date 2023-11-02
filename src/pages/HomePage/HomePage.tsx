import React from 'react';
import './HomePage.css';
import ExampleComponent from '../../components/ExampleComponent/ExampleComponent';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

// interface HomePageProps {
//     path: string;
//   }

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <div className="background">
        <div className="header">
          <div>
            <h1>TEST</h1>
          </div>
          {/* <ExampleComponent name="hello"/> */}
          {/* <img src={logo} className="App-logo" />
          <p>
          Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
