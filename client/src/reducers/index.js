import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducer'
import profileReducer from './profileReducer'
export default combineReducers({
  auth:authReducer,
  profile:profileReducer,
  form:formReducer
})