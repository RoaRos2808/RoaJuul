import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import TimelinePage from './pages/TimelinePage/TimelinePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import OnboardingPage from './pages/OnboardingPage/OnboardingPage';

const App: React.FC = () => {
  const [onboarded, setOnboarded] = useState(false);

  const handleChildEvent = (data: any) => {
    setOnboarded(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {!onboarded && (
          <OnboardingPage onChildEvent={handleChildEvent} />
        )}
        {onboarded && (
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/RoaJuul" element={<HomePage />}></Route>
              <Route path="/RoaJuul/timeline" element={<TimelinePage />}></Route>
            </Routes>
            <Footer />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
