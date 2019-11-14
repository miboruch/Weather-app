import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ProgressionBar from '../../atoms/ProgressionBar/ProgressionBar';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledSingleBox = styled.section`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Details = ({ weatherData }) => {
  return (
    <StyledWrapper>
      <StyledSingleBox>
        <Paragraph small>humidity</Paragraph>
        <ProgressionBar value={weatherData[0].main.humidity} />
      </StyledSingleBox>
      <StyledSingleBox>
        <Paragraph small>pressure</Paragraph>
        <ProgressionBar pressure value={weatherData[0].main.pressure} />
      </StyledSingleBox>
      <StyledSingleBox>
        <Paragraph small>clouds</Paragraph>
        <ProgressionBar value={weatherData[0].clouds.all} />
      </StyledSingleBox>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ weatherDataReducer: { weatherData } }) => {
  return { weatherData };
};

export default connect(mapStateToProps)(Details);
