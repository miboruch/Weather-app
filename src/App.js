import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWeatherData } from './actions/weatherDataActions';
import { getLocation } from './actions/locationDataAction';
import LandingPage from './components/pages/LandingPage';
import MainTemplate from './template/MainTemplate';
import { loadCities } from './actions/loadCitiesAction';

const App = ({ getWeather, getGeolocation, loadCities }) => {
  useEffect(() => {
    getGeolocation();
    getWeather('Tarnow', 'pl');
    loadCities();
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
    getGeolocation: () => dispatch(getLocation()),
    loadCities: () => dispatch(loadCities())
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
