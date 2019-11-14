import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { weekDays } from '../../utils/weekDays';
import { getLocationTime } from '../../utils/timeFunctions';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CityInformation = ({ cityData: { population, name, timezone, country } }) => {
  const currentData = getLocationTime(timezone).toLocaleString();
  const weekDay = weekDays[getLocationTime(timezone).getDay()];

  return (
    <StyledWrapper>
      <Paragraph city>{name}, {country}</Paragraph>
      <Paragraph medium>
        {weekDay} {currentData}
      </Paragraph>
      <Paragraph large> Population: {population}</Paragraph>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ weatherDataReducer: { cityData } }) => {
  return { cityData };
};

CityInformation.propTypes = {
  cityData: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CityInformation);
