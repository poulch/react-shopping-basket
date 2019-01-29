import { combineReducers } from 'redux'
import { backetReducer } from './services/basket'

export const rootReducer = combineReducers({
  basket: backetReducer
})
