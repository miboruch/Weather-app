export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

const initialState = {
  loading: false,
  data: {},
  success: false,
  error: null
};

export const weatherDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload.response
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};