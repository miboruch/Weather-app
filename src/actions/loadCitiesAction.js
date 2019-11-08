import axios from 'axios';
import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from '../reducers/loadCitiesReducer';

const loadStart = () => {
  return {
    type: LOAD_START
  };
};

const loadSuccess = response => {
  return {
    type: LOAD_SUCCESS,
    payload: {
      response
    }
  };
};

const loadFailure = error => {
  return {
    type: LOAD_FAILURE,
    payload: {
      error
    }
  };
};

export const loadCities = () => async dispatch => {
  dispatch(loadStart());

  try {
    const result = await axios.get('city.list.json');

    dispatch(loadSuccess(result));
  } catch (error) {
    dispatch(loadFailure(error));
  }
};
