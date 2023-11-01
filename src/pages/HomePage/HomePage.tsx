import React from 'react';
import './HomePage.css';
import ExampleComponent from '../../components/ExampleComponent/ExampleComponent';

// interface HomePageProps {
//     path: string;
//   }

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
    <header className="header">
        <div>
            <h1>RoaJuul</h1>
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
    </header>
    </div>
  );
}

export default HomePage;
