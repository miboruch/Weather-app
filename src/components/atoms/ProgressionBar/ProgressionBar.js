import React from 'react';
import styled, { css } from 'styled-components';

const StyledBar = styled.div`
  width: 100px;
  height: 2px;
  background: #444;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ value, isPressure }) =>
      isPressure ? (value > 1020 ? 'tomato' : 'white') : value > 75 ? 'tomato' : 'white'};
    height: 2px;
    width: ${({ value, isPressure }) => (isPressure ? `${value / 10 - 40}px` : `${value}px`)};
  }
  
  ::after {
    content: '${({ value, isPressure }) => (isPressure ? `${value}hpa` : `${value}%`)}';
    position: absolute;
    color: #fff;
    font-size: ${({ theme }) => theme.fontSize.xs};
    bottom: -25px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ProgressionBar = ({ value, pressure }) => {
  return <StyledBar value={value} isPressure={pressure} />;
};

export default ProgressionBar;
