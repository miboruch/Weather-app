import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WeatherBox from '../templates/WeatherBox/WeatherBox';
import { getWeatherData } from '../../actions/weatherDataActions';
import hero from '../../assets/images/hero.jpg';
import CityInformation from '../molecules/CityInformation/CityInformation';
import Spinner from '../Spinner/Spinner';

const backgroundURL =
  'https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

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

const LandingPage = ({ loading, citiesLoading }) => {
  return <StyledWrapper>{loading || citiesLoading ? <Spinner /> : <WeatherBox />}</StyledWrapper>;
};

const mapStateToProps = ({
  locationReducer: { lat, long },
  weatherDataReducer: { loading },
  loadCitiesReducer: { citiesLoading }
}) => {
  return { lat, long, loading, citiesLoading };
};

export default connect(mapStateToProps)(LandingPage);
