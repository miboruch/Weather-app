import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getLocation } from './actions/locationDataAction';
import WeatherPage from './pages/WeatherPage';
import LandingPage from './pages/LandingPage';
import MainTemplate from './template/MainTemplate';
import { loadCities } from './actions/loadCitiesAction';

const App = ({ getGeolocation, loadCities }) => {
  useEffect(() => {
    getGeolocation();
    loadCities();
  }, []);

  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/weather' component={WeatherPage} />
        </Switch>
      </MainTemplate>
    </Router>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getGeolocation: () => dispatch(getLocation()),
    loadCities: () => dispatch(loadCities())
  };
};

App.propTypes = {
  getGeolocation: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(App);
