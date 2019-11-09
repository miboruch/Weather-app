import React from 'react';
import styled from 'styled-components';
import CityInformation from '../../molecules/CityInformation/CityInformation';

const WeatherWrapper = styled.div`
  width: 50%;
  margin: auto;
`;

const WeatherBox = () => {
  return (
    <WeatherWrapper>
      <CityInformation />
    </WeatherWrapper>
  );
};

export default WeatherBox;
