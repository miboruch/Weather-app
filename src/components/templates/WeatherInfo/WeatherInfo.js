import React, { useContext } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { InformationContext } from '../../../context/InformationContext';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { getSunTime } from '../../utils/timeFunctions';
import Spinner from '../../Spinner/Spinner';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  transform: translate(${({ isOpen }) => (isOpen ? '0, 0' : '-100%, -100%')});
  transition: transform 1s ease;
  overflow: hidden;
  z-index: 5;
`;

const StyledBox = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledParagraph = styled(Paragraph)`
  color: white;
`;

const WeatherInfo = ({ cityData, weatherData, loading }) => {
  const { isOpen } = useContext(InformationContext);
  const { name, country, population } = cityData;
  console.log(cityData);
  console.log(weatherData);
  return (
    <StyledWrapper isOpen={isOpen}>
      {loading ? (
        <Spinner />
      ) : (
        <StyledBox>
          <StyledParagraph large>
            {name}, {country}
          </StyledParagraph>
          <StyledParagraph>Population: {population}</StyledParagraph>
          <StyledParagraph>Date: {new Date().toLocaleTimeString()}</StyledParagraph>
          <StyledParagraph>Clouds: {weatherData[0].clouds.all}%</StyledParagraph>
          <StyledParagraph>Humidity: {weatherData[0].main.humidity}%</StyledParagraph>
          <StyledParagraph>
            Temperature: {weatherData[0].main.temp}
            <sup>o</sup>C
          </StyledParagraph>
          <StyledParagraph>
            Max temperature: {weatherData[0].main.temp_max}
            <sup>o</sup>C
          </StyledParagraph>
          <StyledParagraph>
            Min temperature: {weatherData[0].main.temp_min}
            <sup>o</sup>C
          </StyledParagraph>
          <StyledParagraph>{weatherData[0].weather[0].main}</StyledParagraph>
          <StyledParagraph>{weatherData[0].wind.speed}m/s</StyledParagraph>
        </StyledBox>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = ({ weatherDataReducer: { cityData, weatherData, loading } }) => {
  return { cityData, weatherData, loading };
};

export default connect(mapStateToProps)(WeatherInfo);
