import { combineReducers } from 'redux'
import { basketReducer } from './services/basket'

export const rootReducer = combineReducers({
  basket: basketReducer
})
