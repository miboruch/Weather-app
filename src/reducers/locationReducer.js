export const GET_LOCATION = 'GET_LOCATION';
export const LOCATION_START = 'LOCATION_START';

const initialState = {
  lat: null,
  long: null,
  loading: false
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_START:
      return {
        ...state,
        loading: true
      };
    case GET_LOCATION:
      return {
        ...state,
        lat: action.payload.lat,
        long: action.payload.long,
        loading: false
      };
    default:
      return state;
  }
};
