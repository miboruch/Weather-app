import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
`;

const StyledParagraph = styled(Paragraph)`
  color: white;
`;

const WeatherInfo = () => {
  return (
    <StyledWrapper>
      <StyledParagraph>Hello</StyledParagraph>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ weatherDataReducer: { cityData } }) => {
  return { cityData };
};

export default connect(mapStateToProps)(WeatherInfo);
