import {
  call, put, all, take, takeEvery, delay,
} from 'redux-saga/effects'
import Api from '@/api'

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'redEnvelope/CREATE' })
}

export function* fetchData(action) {
  try {
    const data = yield call(Api.promotion.red, action.payload.url)
    yield put({ type: 'FETCH_SUCCEEDED', data })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

export function* watchIncrementAsync() {
  const action = yield take('FETCH_REQUEST') // 指示中间件等待 Store 上指定的 action，即监听 action
  // yield fork(fetchUrl, action.url)
  console.log(action)
  yield call(incrementAsync)
  // yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()])
}
