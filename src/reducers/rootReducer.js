import { combineReducers } from 'redux';
import { weatherDataReducer } from './weatherDataReducer';
import { locationReducer } from './locationReducer';
import { loadCitiesReducer } from './loadCitiesReducer';
import { searchCityReducer } from './searchCityReducer';

export const rootReducer = combineReducers({
  weatherDataReducer,
  locationReducer,
  loadCitiesReducer,
  searchCityReducer
});
