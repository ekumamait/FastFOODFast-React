import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: AuthReducer,
    users: UserReducer,
  });
  
  export default rootReducer;
  