import React, { useContext } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph/Paragraph';
import { weekDays } from '../../utils/weekDays';
import { getForecastTime } from '../../utils/timeFunctions';
import { setOffset } from '../../../actions/loadCitiesAction';
import { InformationContext } from '../../../context/InformationContext';

const StyledWrapper = styled.section`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  cursor: pointer;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  padding: 0.5rem 0;
`;

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
`;

const SingleForecast = ({ offset, weatherData, cityData: { timezone }, setCurrentOffset }) => {
  const { setInformationOpen } = useContext(InformationContext);

  const { fullDate, time, date } = getForecastTime(timezone, weatherData[offset].dt_txt);
  const forecastWeekDay = weekDays[fullDate.getDay()];
  const forecastTemperature = weatherData[offset].main.temp;
  const { icon } = weatherData[offset].weather[0];
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const { main } = weatherData[offset].weather[0];

  const openInfo = offsetValue => {
    setInformationOpen(false);
    setCurrentOffset(offsetValue);
    setInformationOpen(true);
  };

  return (
    <StyledWrapper onClick={() => openInfo(offset)}>
      <StyledParagraph small>{date}</StyledParagraph>
      <StyledParagraph large>{time}</StyledParagraph>
      <StyledParagraph medium>{forecastWeekDay}</StyledParagraph>
      <StyledParagraph large>
        {Math.round(forecastTemperature * 10) / 10}
        <sup>o</sup>
      </StyledParagraph>
      <StyledImage src={iconURL} alt='Icon' />
      <StyledParagraph small>{main}</StyledParagraph>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ weatherDataReducer: { weatherData, cityData } }) => {
  return { weatherData, cityData };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentOffset: offset => dispatch(setOffset(offset))
  };
};

SingleForecast.propTypes = {
  offset: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleForecast);
