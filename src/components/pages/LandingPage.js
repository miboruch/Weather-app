import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getWeatherData } from '../../actions/weatherDataActions';
import hero from '../../assets/images/hero.jpg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${hero});
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const LandingPage = () => {
  return (
    <StyledWrapper>
      <h1>hello</h1>
    </StyledWrapper>
  );
};

export default LandingPage;
