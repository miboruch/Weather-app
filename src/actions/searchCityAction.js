import {
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SET_CHOSEN_CITY
} from '../reducers/searchCityReducer';

const searchStart = () => {
  return {
    type: SEARCH_START
  };
};

const searchSuccess = result => {
  return {
    type: SEARCH_SUCCESS,
    payload: {
      result
    }
  };
};

const searchFailure = error => {
  return {
    type: SEARCH_FAILURE,
    payload: {
      error
    }
  };
};

export const setChosenCity = (name, country) => {
  return {
    type: SET_CHOSEN_CITY,
    payload: {
      name,
      country
    }
  };
};

export const searchCity = (cityName, loadedCities) => dispatch => {
  dispatch(searchStart());

  const cities = [];

  loadedCities.forEach(item => {
    if (item.name === cityName) {
      cities.push(item);
    }
  });

  cities.length === 0
    ? dispatch(searchFailure('City does not exists'))
    : dispatch(searchSuccess(cities));
};
