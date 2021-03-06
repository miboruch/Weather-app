import axios from 'axios';
import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE, SET_OFFSET } from '../reducers/loadCitiesReducer';

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

export const setOffset = offset => {
  return {
    type: SET_OFFSET,
    payload: {
      offset
    }
  };
};

export const loadCities = () => async dispatch => {
  dispatch(loadStart());

  try {
    const result = await axios.get('city.list.json');

    dispatch(loadSuccess(result.data));
  } catch (error) {
    dispatch(loadFailure(error));
  }
};
