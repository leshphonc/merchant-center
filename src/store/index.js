import { combineReducers } from 'redux'
import promotion from './modules/promotion/index'

export default combineReducers({
  ...promotion,
})
