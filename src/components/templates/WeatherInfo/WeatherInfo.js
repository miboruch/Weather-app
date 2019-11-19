import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { animated, useTrail } from 'react-spring';
import { InformationContext } from '../../../context/InformationContext';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Spinner from '../../Spinner/Spinner';
import { getLocationTime } from '../../utils/timeFunctions';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 0.7) 0%,
    rgba(3, 3, 3, 0.9) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 1s ease;
  overflow: hidden;
  z-index: 5;
  border-right: 1px solid rgba(0, 0, 0, 0.7);

  ${({ theme }) => theme.mq.standard} {
    width: 24%;
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 0.22) 0%,
      rgba(3, 3, 3, 0.6) 50%,
      rgba(0, 0, 0, 0.22) 100%
    );
  }
`;

const StyledBox = styled.div`
  width: 80%;
  margin: auto;
`;

const StyledParagraph = styled(animated(Paragraph))`
  color: white;
`;

const StyledAbsoluteParagraph = styled(StyledParagraph)`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;

const useTime = timezone => {
  const [time, setTime] = useState(getLocationTime(timezone).toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getLocationTime(timezone).toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  });
  return time;
};

const WeatherInfo = ({ cityData, weatherData, loading, currentOffset }) => {
  const currentTime = useTime(cityData.timezone);
  const { isOpen } = useContext(InformationContext);
  const { name, country, population } = cityData;

  const data = [
    {
      title: 'Population',
      result: population
    },
    {
      title: 'Date',
      result: new Date(weatherData[currentOffset].dt_txt).toLocaleString()
    },
    {
      title: 'Clouds',
      result: `${weatherData[currentOffset].clouds.all}%`
    },
    {
      title: 'Humidity',
      result: `${weatherData[currentOffset].main.humidity}%`
    },
    {
      title: 'Temperature',
      result: `${weatherData[currentOffset].main.temp}`,
      unit: (
        <>
          <sup>o</sup>C
        </>
      )
    },
    {
      title: 'Max temperature',
      result: `${weatherData[currentOffset].main.temp_max}`,
      unit: (
        <>
          <sup>o</sup>C
        </>
      )
    },
    {
      title: 'Min temperature',
      result: `${weatherData[currentOffset].main.temp_min}`,
      unit: (
        <>
          <sup>o</sup>C
        </>
      )
    },
    {
      title: 'Wind',
      result: `${weatherData[currentOffset].wind.speed}m/s`
    }
  ];

  const trail = useTrail(data.length, {
    opacity: isOpen ? 1 : 0,
    transform: `translateX(${isOpen ? '0' : '-30px'})`,
    from: { opacity: 0, transform: 'translateX(-30px)' },
    delay: 700
  });

  return (
    <StyledWrapper isOpen={isOpen}>
      {loading ? (
        <Spinner />
      ) : (
        <StyledBox>
          <StyledParagraph city>
            {name}, {country}
          </StyledParagraph>

          {trail.map((props, index) => (
            <StyledParagraph style={props} key={index}>
              {data[index].title}: {data[index].result} {data[index].unit ? data[index].unit : null}
            </StyledParagraph>
          ))}

          <StyledAbsoluteParagraph>
            <strong>{currentTime}</strong>
          </StyledAbsoluteParagraph>
        </StyledBox>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = ({
  weatherDataReducer: { cityData, weatherData, loading },
  loadCitiesReducer: { currentOffset }
}) => {
  return { cityData, weatherData, loading, currentOffset };
};

export default connect(mapStateToProps)(WeatherInfo);
