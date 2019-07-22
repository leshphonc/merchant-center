import { combineReducers } from 'redux'
import promotion from '@/pages/modules/promotion/store'
import { reducer as formReducer } from 'redux-form'

// 项目reducers合并入口
export default combineReducers({
  ...promotion,
  form: formReducer,
})
