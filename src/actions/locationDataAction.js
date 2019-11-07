import { GET_LOCATION, LOCATION_START } from '../reducers/locationReducer';

const getLocationStart = () => {
  return {
    type: LOCATION_START
  };
};

export const getLocation = () => dispatch => {
  dispatch(getLocationStart());
  return navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    dispatch({
      type: GET_LOCATION,
      payload: {
        lat,
        long
      }
    });
  });
};
