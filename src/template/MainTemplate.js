import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import { connect } from 'react-redux';
import SEO from '../components/SEO/SEO';
import GlobalStyle from '../assets/styles/GlobalStyle';
import theme from '../assets/styles/theme';
import Hamburger from '../components/atoms/Hamburger/Hamburger';
import InformationContextProvider from '../context/InformationContext';
import { backgroundURL, secondBackground } from '../components/utils/variables';
import location from '../assets/images/location.svg';
import { getLocationWeatherData } from '../actions/weatherDataActions';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${backgroundURL});
  background-size: cover;
  background-position: 30%;
  margin: 0;
  padding: 0;
`;

const StyledIconWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 50%;
`;

const StyledIcon = styled(ReactSVG)`
  width: 30px;
  height: 30px;
  fill: white;
  transition: all 1s ease;
  cursor: pointer;

  :hover {
    fill: lightblue;
  }
`;

const MainTemplate = ({ children, getWeatherByLocation, lat, long }) => {
  return (
    <StyledWrapper>
      <SEO />
      <GlobalStyle />
      <InformationContextProvider>
        <ThemeProvider theme={theme}>
          <Link to='/weather'>
            <StyledIconWrapper>
              <StyledIcon src={location} onClick={() => getWeatherByLocation(lat, long)} />
            </StyledIconWrapper>
          </Link>
          <Hamburger />
          {children}
        </ThemeProvider>
      </InformationContextProvider>
    </StyledWrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

const mapStateToProps = ({ locationReducer: { lat, long } }) => {
  return {
    lat,
    long
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWeatherByLocation: (lat, lon) => dispatch(getLocationWeatherData(lat, lon))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainTemplate);
