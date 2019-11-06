import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import SEO from '../components/SEO/SEO';
import GlobalStyle from '../assets/styles/GlobalStyle';
import theme from '../assets/styles/theme';
import Hamburger from '../components/atoms/Hamburger/Hamburger';
import MenuContextProvider from '../context/MenuContext';

const StyledWrapper = styled.div`
  width: 100%;
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
