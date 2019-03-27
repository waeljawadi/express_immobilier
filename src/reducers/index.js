import {combineReducers} from 'redux'
import immoReducer from './catalogueReducer'
import actuReducer from './actuReducer'
import contactReducer from './contactReducer'
// import keywordReducer from './keywordReducer'
import userReducer from './usersReducer'

export default combineReducers({immoReducer,actuReducer,contactReducer,userReducer})
