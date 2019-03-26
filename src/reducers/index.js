import {combineReducers} from 'redux'
import immoReducer from './catalogueReducer'
import actuReducer from './actuReducer'
import contactReducer from './contactReducer'

export default combineReducers({immoReducer,actuReducer,contactReducer})
