import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WeatherBox from '../components/templates/WeatherBox/WeatherBox';
import Spinner from '../components/Spinner/Spinner';
import { backgroundURL } from '../components/utils/variables';
import { getWeatherData } from '../actions/weatherDataActions';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${backgroundURL});
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const WeatherPage = ({ loading, getWeather, name, country }) => {
  useEffect(() => {
    const savedName = localStorage.getItem('name');
    const savedCountry = localStorage.getItem('country');
    if (localStorage.getItem('name') && localStorage.getItem('country')) {
      getWeather(savedName, savedCountry);
    } else {
      getWeather(name, country);
    }
  }, []);
  return <StyledWrapper>{loading ? <Spinner /> : <WeatherBox />}</StyledWrapper>;
};

const mapStateToProps = ({
  locationReducer: { lat, long },
  weatherDataReducer: { loading },
  searchCityReducer: { name, country }
}) => {
  return {
    lat,
    long,
    loading,
    name,
    country
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWeather: (name, country) => dispatch(getWeatherData(name, country))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherPage);
