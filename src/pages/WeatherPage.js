import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WeatherBox from '../components/templates/WeatherBox/WeatherBox';
import Spinner from '../components/Spinner/Spinner';
import { backgroundURL } from '../components/utils/variables';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${backgroundURL});
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const WeatherPage = ({ loading, citiesLoading }) => {
  return <StyledWrapper>{loading || citiesLoading ? <Spinner /> : <WeatherBox />}</StyledWrapper>;
};

const mapStateToProps = ({
  locationReducer: { lat, long },
  weatherDataReducer: { loading },
  loadCitiesReducer: { citiesLoading }
}) => {
  return { lat, long, loading, citiesLoading };
};

export default connect(mapStateToProps)(WeatherPage);
