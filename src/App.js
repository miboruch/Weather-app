import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getWeatherData } from './actions/weatherDataActions';
import { getLocation } from './actions/locationDataAction';
import WeatherPage from './pages/WeatherPage';
import LandingPage from './pages/LandingPage';
import MainTemplate from './template/MainTemplate';
import { loadCities } from './actions/loadCitiesAction';
import Spinner from './components/Spinner/Spinner';

const App = ({ getWeather, getGeolocation, loadCities, loading, citiesLoading }) => {
  useEffect(() => {
    getGeolocation();
    getWeather('Krakow', 'pl');
    loadCities();
  }, []);

  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route path='/' component={LandingPage} />
          <Route path='/weather/:query' component={WeatherPage} />
        </Switch>
      </MainTemplate>
    </Router>
  );
};

const mapStateToProps = ({
  weatherDataReducer: { loading },
  loadCitiesReducer: { citiesLoading }
}) => {
  return { loading, citiesLoading };
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
  mapStateToProps,
  mapDispatchToProps
)(App);
