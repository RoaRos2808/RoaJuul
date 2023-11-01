import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ExampleComponent from './components/ExampleComponent/ExampleComponent';
import HomePage from './pages/HomePage/HomePage';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
