import { combineReducers } from 'redux';
import errorReducer from './ErrorReducer';
import loginReducer from './AuthReducer';

const rootReducer = combineReducers({
  auth: loginReducer,
  error: errorReducer
});

export default rootReducer;
