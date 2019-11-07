import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWeatherData } from './actions/weatherDataActions';
import { getLocation } from './actions/locationDataAction';
import LandingPage from './components/pages/LandingPage';
import MainTemplate from './template/MainTemplate';

const App = ({ getWeather, getGeolocation }) => {
  useEffect(() => {
    getGeolocation();
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
    getWeather: (city, country) => dispatch(getWeatherData(city, country)),
    getGeolocation: () => dispatch(getLocation())
  };
};

App.propTypes = {
  getWeather: PropTypes.func.isRequired,
  getGeolocation: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(App);
