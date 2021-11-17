import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { clientReducer } from './clientReducer';

const rootReducer = combineReducers({loginReducer, clientReducer});

export default rootReducer;