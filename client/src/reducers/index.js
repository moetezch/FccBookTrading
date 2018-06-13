import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducer'
import bookReducer from './bookReducer'
import userReducer from './userReducer'
import tradeReducer from './tradeReducer'
export default combineReducers({
  auth:authReducer,
  book:bookReducer,
  user:userReducer,
  form:formReducer,
  trade:tradeReducer
})