import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import SingleForecast from '../../atoms/SingleForecast/SingleForecast';

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ForecastSlider = ({ weatherData }) => {
  const data = weatherData.slice(0, 12);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2500,
    slidesToShow: 4,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    swipeToSlide: true
  };

  return (
    <StyledWrapper>
      <Slider {...settings}>
        {data.map((item, index) => (
          <SingleForecast key={index} offset={index} />
        ))}
      </Slider>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ weatherDataReducer: { weatherData } }) => {
  return { weatherData };
};

export default connect(mapStateToProps)(ForecastSlider);
