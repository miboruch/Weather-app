import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { animated } from 'react-spring';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { weekDays } from '../../utils/weekDays';
import { getLocationTime } from '../../utils/timeFunctions';
import { fadeIn } from '../../../animations/animations';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledParagraph = styled(animated(Paragraph))`
  color: #fff;
`;

const useTime = timezone => {
  const [time, setTime] = useState(getLocationTime(timezone).toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getLocationTime(timezone).toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  });
  return time;
};

const CityInformation = ({ cityData: { population, name, timezone, country } }) => {
  const currentData = useTime(timezone);
  const weekDay = weekDays[getLocationTime(timezone).getDay()];
  const fade = fadeIn(1000, 1000)();

  return (
    <StyledWrapper>
      <StyledParagraph style={fade} city>
        {name}, {country}
      </StyledParagraph>
      <Paragraph medium>
        {weekDay} {currentData}
      </Paragraph>
      <Paragraph large>Population: {population}</Paragraph>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ weatherDataReducer: { cityData } }) => {
  return { cityData };
};

export default connect(mapStateToProps)(CityInformation);
