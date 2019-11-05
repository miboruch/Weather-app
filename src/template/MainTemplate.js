import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import SEO from '../components/SEO/SEO';
import GlobalStyle from '../assets/styles/GlobalStyle';
import theme from '../assets/styles/theme';

const StyledWrapper = styled.div`
  width: 100%;
`;

const MainTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledWrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainTemplate;
