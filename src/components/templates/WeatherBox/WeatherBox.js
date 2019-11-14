import React from 'react';
import styled from 'styled-components';
import CityInformation from '../../molecules/CityInformation/CityInformation';
import Temperature from '../../molecules/Temperature/Temperature';
import Forecast from '../../molecules/Forecast/Forecast';
import Details from '../../molecules/Details/Details';

const WeatherWrapper = styled.div`
  width: 100%; /* 50% desktop */
  min-height: 100vh;
  padding-top: 10rem;
`;

const WeatherBox = () => {
  return (
    <WeatherWrapper>
      <CityInformation />
      <Temperature />
      <Forecast />
      <Details />
    </WeatherWrapper>
  );
};

export default WeatherBox;
