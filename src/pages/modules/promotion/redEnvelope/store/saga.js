import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { LOAD } from './index'

// ----worker saga
function* startFetch() {
  console.log(111)
  yield put({ type: LOAD })
  try {
    const res = yield axios.get('/api/mockRed.json')
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

// -----watcher saga
export default function* loadRed() {
  yield takeEvery('redEnvelope', startFetch)
  yield takeEvery('redEnvelope/a', startFetch)
  yield takeEvery('redEnvelope/c', startFetch)
}
