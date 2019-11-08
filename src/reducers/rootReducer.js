import { combineReducers } from 'redux';
import { weatherDataReducer } from './weatherDataReducer';
import { locationReducer } from './locationReducer';
import { loadCitiesReducer } from './loadCitiesReducer';

export const rootReducer = combineReducers({
  weatherDataReducer,
  locationReducer,
  loadCitiesReducer
});
