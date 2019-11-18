import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WeatherBox from '../components/templates/WeatherBox/WeatherBox';
import Spinner from '../components/Spinner/Spinner';
import { getWeatherData } from '../actions/weatherDataActions';
import arrow from '../assets/images/arrow.svg';

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledArrowIconWrapper = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 7rem;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px dotted #fff;
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
    fill: lightgreen;
  }
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
      <StyledArrowIconWrapper>
        <Link to='/'>
          <StyledArrowIcon src={arrow} />
        </Link>
      </StyledArrowIconWrapper>
      {loading ? <Spinner /> : <WeatherBox />}
    </StyledWrapper>
  );
};

const mapStateToProps = ({
  weatherDataReducer: { loading },
  searchCityReducer: { name, country }
}) => {
  return {
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
