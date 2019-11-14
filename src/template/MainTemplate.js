import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import SEO from '../components/SEO/SEO';
import GlobalStyle from '../assets/styles/GlobalStyle';
import theme from '../assets/styles/theme';
import Hamburger from '../components/atoms/Hamburger/Hamburger';
import MenuContextProvider from '../context/MenuContext';
import { backgroundURL } from '../components/utils/variables';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${backgroundURL});
  background-size: cover;
  background-position: 30%;
  margin: 0;
  padding: 0;
`;

const MainTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <SEO />
      <GlobalStyle />
      <MenuContextProvider>
        <ThemeProvider theme={theme}>
          <Hamburger />
          {children}
        </ThemeProvider>
      </MenuContextProvider>
    </StyledWrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainTemplate;
