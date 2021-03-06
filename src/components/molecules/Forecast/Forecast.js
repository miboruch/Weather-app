import React from 'react';
import styled from 'styled-components';
import ForecastSlider from '../../templates/ForecastSlider/ForecastSlider';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 4rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: row;
  touch-action: none;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(3, 3, 3, 0.6) 50%,
    rgba(2, 0, 36, 0.8) 100%
  );

  ${({ theme }) => theme.mq.standard} {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(3, 3, 3, 0.3) 50%,
      rgba(2, 0, 36, 0.5) 100%
    );
  }
`;

const Forecast = () => {
  return (
    <StyledWrapper>
      <ForecastSlider />
    </StyledWrapper>
  );
};

export default Forecast;
