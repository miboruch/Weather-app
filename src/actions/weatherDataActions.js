import axios from 'axios';
import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../reducers/weatherDataReducer';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const fetchStart = () => {
  return {
    type: FETCH_START
  };
};

const fetchSuccess = data => {
  return {
    type: FETCH_SUCCESS,
    payload: {
      cityData: data.city,
      weatherData: data.list
    }
  };
};

const fetchFailure = error => {
  return {
    type: FETCH_FAILURE,
    payload: {
      error
    }
  };
};

export const getWeatherData = (city, country) => async dispatch => {
  dispatch(fetchStart());
  try {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=metric`
    );
    dispatch(fetchSuccess(result.data));
  } catch (e) {
    dispatch(fetchFailure(e));
  }
};

export const getLocationWeatherData = (lat, lon) => async dispatch => {
  dispatch(fetchStart());
  try {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    );
    dispatch(fetchSuccess(result.data));
  } catch (error) {
    dispatch(fetchFailure(error));
  }
};
