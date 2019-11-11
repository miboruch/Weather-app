import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { weekDays } from '../../utils/weekDays';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CityInformation = ({ cityData: { population, name } }) => {
  const currentData = new Date().toLocaleString();
  const weekDay = weekDays[new Date().getDay()];

  return (
    <StyledWrapper>
      <Paragraph city>{name}</Paragraph>
      <Paragraph medium>{weekDay} {currentData}</Paragraph>
      <Paragraph large> Population: {population}</Paragraph>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ weatherDataReducer: { cityData, weatherData } }) => {
  return { cityData, weatherData };
};

CityInformation.propTypes = {
  cityData: PropTypes.object.isRequired,
  population: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(CityInformation);
