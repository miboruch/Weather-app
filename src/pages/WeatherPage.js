import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactSVG from 'react-svg';
import styled from 'styled-components';
import WeatherBox from '../components/templates/WeatherBox/WeatherBox';
import Spinner from '../components/Spinner/Spinner';
import { getWeatherData, getLocationWeatherData } from '../actions/weatherDataActions';
import arrow from '../assets/images/arrow.svg';

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledArrowIconWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 7rem;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 50%;
`;

const StyledArrowIcon = styled(ReactSVG)`
  right: 7rem;
  width: 30px;
  height: 30px;
  fill: white;
  transition: all 1s ease;
  cursor: pointer;

  :hover {
    fill: lightblue;
  }
`;

const WeatherPage = ({
  loading,
  getWeather,
  getLocationWeather,
  name,
  country,
  lat,
  long,
  history
}) => {
  useEffect(() => {
    const savedName = localStorage.getItem('name');
    const savedCountry = localStorage.getItem('country');
    if (savedName && savedCountry) {
      getWeather(savedName, savedCountry);
    } else if (lat && long) {
      getLocationWeather(lat, long);
    } else {
      getWeather((name = 'Krakow'), (country = 'PL'));
    }
  }, []);

  return (
    <StyledWrapper>
      <StyledArrowIconWrapper>
        <StyledArrowIcon
          src={arrow}
          onClick={() => {
            localStorage.removeItem('name');
            localStorage.removeItem('country');
            history.push('/');
          }}
        />
      </StyledArrowIconWrapper>
      {loading ? <Spinner /> : <WeatherBox />}
    </StyledWrapper>
  );
};

const mapStateToProps = ({
  weatherDataReducer: { loading },
  searchCityReducer: { name, country },
  locationReducer: { lat, long }
}) => {
  return {
    loading,
    name,
    country,
    lat,
    long
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWeather: (name, country) => dispatch(getWeatherData(name, country)),
    getLocationWeather: (lat, long) => dispatch(getLocationWeatherData(lat, long))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherPage);
