import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../reducers/weatherDataReducer';

const fetchStart = () => {
  return {
    type: FETCH_START
  };
};

const fetchSuccess = data => {
  return {
    type: FETCH_SUCCESS,
    payload: {
      data
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
