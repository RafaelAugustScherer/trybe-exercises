import { combineReducers } from 'redux';
import personalFormReducer from './personalFormReducer';
import professionalFormReducer from './professionalFormReducer';

const rootReducer = combineReducers({ personalFormReducer, professionalFormReducer });

export default rootReducer;
