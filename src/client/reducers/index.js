import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import propertyReducer from './propertyReducer';


export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  property: propertyReducer
});
