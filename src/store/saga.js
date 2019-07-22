import { all } from 'redux-saga/effects'
import promotion from '@/pages/modules/promotion/sagas'

// 项目saga监听入口
export default function* rootSaga() {
  yield all(promotion)
}
