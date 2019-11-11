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

const getLocationTime = (timezone) => {
  const cityTimezone = timezone / 3600;
  const date = new Date();
  const currentTimezone = date.getTimezoneOffset() / 60;
  date.setHours(date.getHours() + (cityTimezone + currentTimezone));

  return date;
};

const CityInformation = ({ cityData: { population, name, timezone } }) => {
  const currentData = getLocationTime(timezone).toLocaleString();
  const weekDay = weekDays[getLocationTime(timezone).getDay()];

  return (
    <StyledWrapper>
      <Paragraph city>{name}</Paragraph>
      <Paragraph medium>
        {weekDay} {currentData}
      </Paragraph>
      <Paragraph large> Population: {population}</Paragraph>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ weatherDataReducer: { cityData, weatherData } }) => {
  return { cityData, weatherData };
};

CityInformation.propTypes = {
  cityData: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CityInformation);
