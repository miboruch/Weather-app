import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import WeatherBox from '../components/templates/WeatherBox/WeatherBox';
import Spinner from '../components/Spinner/Spinner';
import { getWeatherData, getLocationWeatherData } from '../actions/weatherDataActions';
import WeatherInfo from '../components/templates/WeatherInfo/WeatherInfo';
import location from '../assets/images/location.svg';

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledArrowWrapper = styled.div`
  position: fixed;
  top: 0.5rem;
  right: 0.7rem;
  width: 50px;
  height: 50px;
  border: 1px dashed #fff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledArrowIcon = styled.div`
  color: white;
  font-size: 40px;
`;

const StyledIcon = styled(ReactSVG)`
  position: fixed;
  right: 7rem;
  top: 1.5rem;
  width: 30px;
  height: 30px;
  fill: white;
`;

const WeatherPage = ({ loading, getWeather, name, country, getWeatherByLocation, lat, long }) => {
  useEffect(() => {
    const savedName = localStorage.getItem('name');
    const savedCountry = localStorage.getItem('country');
    if (localStorage.getItem('name') && localStorage.getItem('country')) {
      getWeather(savedName, savedCountry);
    } else {
      getWeather(name, country);
    }
  }, []);

  return (
    <StyledWrapper>
      <Link to='/'>
        <StyledArrowWrapper>
          <StyledArrowIcon>&#8672;</StyledArrowIcon>
        </StyledArrowWrapper>
      </Link>
      <StyledIcon src={location} onClick={() => getWeatherByLocation(lat, long)} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <WeatherBox />
          <WeatherInfo />
        </>
      )}
    </StyledWrapper>
  );
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
    getWeather: (name, country) => dispatch(getWeatherData(name, country)),
    getWeatherByLocation: (lat, lon) => dispatch(getLocationWeatherData(lat, lon))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherPage);
