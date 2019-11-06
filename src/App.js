import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from './actions/weatherDataActions';
import LandingPage from './components/pages/LandingPage';
import MainTemplate from './template/MainTemplate';

const App = ({ getWeather }) => {
  useEffect(() => {
    console.log('wtf');
    getWeather('Tarnow', 'pl');
  }, []);

  return (
    <>
      <MainTemplate>
        <LandingPage />
      </MainTemplate>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getWeather: (city, country) => dispatch(getWeatherData(city, country))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
