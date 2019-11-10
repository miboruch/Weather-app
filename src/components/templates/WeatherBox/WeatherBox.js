import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CityInformation from '../../molecules/CityInformation/CityInformation';
import Temperature from '../../molecules/Temperature/Temperature';

const WeatherWrapper = styled.div`
  width: 100%; /* 50% desktop */
  margin-top: 10rem;
`;

const WeatherBox = ({ loading, success }) => {
  return (
    <WeatherWrapper>
      <CityInformation />
      <Temperature />
    </WeatherWrapper>
  );
};

const mapStateToProps = ({ weatherDataReducer: { loading, success } }) => {
  return { loading, success };
};

export default connect(mapStateToProps)(WeatherBox);
