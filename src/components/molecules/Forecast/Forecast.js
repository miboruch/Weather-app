import React from 'react';
import styled from 'styled-components';
import SingleForecast from '../../atoms/SingleForecast/SingleForecast';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 4rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: row;
  touch-action: none;
`;

const Forecast = () => {
  return (
    <StyledWrapper>
      <SingleForecast offset={0} />
      <SingleForecast offset={1} />
      <SingleForecast offset={2} />
      <SingleForecast offset={3} />
    </StyledWrapper>
  );
};

export default Forecast;
