export const SEARCH_START = 'SEARCH_START';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const SET_CHOSEN_CITY = 'SET_CHOSEN_CITY';

const initialState = {
  citySearching: false,
  result: [],
  error: null,
  name: '',
  country: ''
};

export const searchCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        result: [],
        citySearching: true,
        error: null
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        citySearching: false,
        result: action.payload.result
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        citySearching: false,
        result: [],
        error: action.payload.error
      };
    case SET_CHOSEN_CITY:
      return {
        ...state,
        name: action.payload.name,
        country: action.payload.country
      };
    default:
      return state;
  }
};
