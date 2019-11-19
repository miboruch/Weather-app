import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import CityInformation from '../../molecules/CityInformation/CityInformation';
import Temperature from '../../molecules/Temperature/Temperature';
import Forecast from '../../molecules/Forecast/Forecast';
import Details from '../../molecules/Details/Details';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import { fadeIn } from '../../../animations/animations';

const WeatherWrapper = styled(animated.div)`
  width: 100%;
  min-height: 100vh;
  padding-top: 10rem;

  ${({ theme }) => theme.mq.standard} {
    width: 50%;
    margin: auto;
  }
`;

const WeatherBox = () => {
  const fade = fadeIn(1000, 1000)();
  return (
    <WeatherWrapper style={fade}>
      <WeatherInfo />
      <CityInformation />
      <Temperature />
      <Forecast />
      <Details />
    </WeatherWrapper>
  );
};

export default WeatherBox;
