export const LOAD_START = 'LOAD_START';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';
export const SET_OFFSET = 'SET_OFFSET';

const initialState = {
  citiesLoading: true,
  cities: undefined,
  error: null,
  currentOffset: 0
};

export const loadCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        error: null
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        cities: action.payload.response,
        error: null,
        citiesLoading: false
      };
    case LOAD_FAILURE:
      return {
        ...state,
        citiesLoading: false,
        error: action.payload.error
      };
    case SET_OFFSET:
      return {
        ...state,
        currentOffset: action.payload.offset
      };
    default:
      return state;
  }
};
