import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import WeatherBox from '../components/templates/WeatherBox/WeatherBox';
import Spinner from '../components/Spinner/Spinner';
import { backgroundURL } from '../components/utils/variables';
import { getWeatherData } from '../actions/weatherDataActions';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${backgroundURL});
  background-size: cover;
  background-position: 30%;
  margin: 0;
  padding: 0;
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

  return (
    <StyledWrapper>
      <Link to={'/'}>
        <StyledArrowWrapper>
          <StyledArrowIcon>&#8672;</StyledArrowIcon>
        </StyledArrowWrapper>
      </Link>
      {loading ? <Spinner /> : <WeatherBox />}
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
    getWeather: (name, country) => dispatch(getWeatherData(name, country))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherPage);
