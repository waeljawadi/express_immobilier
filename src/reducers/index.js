import {combineReducers} from 'redux'
import immoReducer from './catalogueReducer'
import actuReducer from './actuReducer'

export default combineReducers({immoReducer,actuReducer})
