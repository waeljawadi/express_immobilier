import {combineReducers} from 'redux'
import immoReducer from './catalogueReducer'
import ratereducer from './rateReducer'

export default combineReducers({immoReducer,ratereducer})