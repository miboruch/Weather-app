export const SEARCH_START = 'SEARCH_START';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

const initialState = {
  citySearching: false,
  result: [],
  error: null
};

export const searchCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        result: [],
        citySearching: true
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
    default:
      return state;
  }
};
