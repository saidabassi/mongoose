import { combineReducers } from 'redux';
import contactReducer from './ContactReducer.Js';
const rootReducer = combineReducers({ contactReducer })

export default rootReducer