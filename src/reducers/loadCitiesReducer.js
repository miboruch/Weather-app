export const LOAD_START = 'LOAD_START';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';

const initialState = {
  loading: false,
  cities: undefined,
  error: null
};

export const loadCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        cities: action.payload.response,
        loading: false
      };
    case LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
