import React from 'react';
import LandingPage from './components/pages/LandingPage';
import MainTemplate from './template/MainTemplate';

function App() {
  return (
    <>
      <MainTemplate>
        <LandingPage />
      </MainTemplate>
    </>
  );
}

export default App;
