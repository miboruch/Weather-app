import { combineReducers } from 'redux';
import { weatherDataReducer } from './weatherDataReducer';
import { locationReducer } from './locationReducer';

export const rootReducer = combineReducers({
  weatherDataReducer,
  locationReducer
});
