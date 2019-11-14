import React, { useContext } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { InformationContext } from '../../../context/InformationContext';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);
  transform: translate(${({ isOpen }) => (isOpen ? '0, 0' : '-100%, -70%')});
  transition: transform 1s ease;
  overflow: hidden;
  z-index: 5;
`;

const StyledParagraph = styled(Paragraph)`
  color: white;
`;

const WeatherInfo = () => {
  const { isOpen } = useContext(InformationContext);
  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledParagraph>Hello</StyledParagraph>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ weatherDataReducer: { cityData } }) => {
  return { cityData };
};

export default connect(mapStateToProps)(WeatherInfo);
