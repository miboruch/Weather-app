import React from 'react';
import { connect } from 'react-redux';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const Temperature = ({ weatherData }) => {
  return (
    <>
      <Paragraph temperature>
        {weatherData[0].main.temp}
        <sup>o</sup>C
      </Paragraph>
      <Paragraph large>{weatherData[0].weather[0].main}</Paragraph>
      <Paragraph medium>{weatherData[0].weather[0].description}</Paragraph>
    </>
  );
};

const mapStateToProps = ({ weatherDataReducer: { weatherData } }) => {
  return { weatherData };
};

export default connect(mapStateToProps)(Temperature);
