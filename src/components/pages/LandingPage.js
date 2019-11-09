import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WeatherBox from '../templates/WeatherBox/WeatherBox';
import { getWeatherData } from '../../actions/weatherDataActions';
import hero from '../../assets/images/hero.jpg';
import CityInformation from '../molecules/CityInformation/CityInformation';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${hero});
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const LandingPage = ({ lat, long }) => {
  useEffect(() => {
    console.log(lat, long);
  }, [lat]);

  return (
    <StyledWrapper>
      <WeatherBox />
    </StyledWrapper>
  );
};

const mapStateToProps = ({ locationReducer: { lat, long } }) => {
  return { lat, long };
};

export default connect(mapStateToProps)(LandingPage);
