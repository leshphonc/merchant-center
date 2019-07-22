// redEnvelope.js

// Actions
const LOAD = 'redEnvelope/LOAD'
const CREATE = 'redEnvelope/CREATE'
const UPDATE = 'redEnvelope/UPDATE'
const REMOVE = 'redEnvelope/REMOVE'

const initialState = {
  redEnvelopeList: [],
  isLoading: 'false',
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        redEnvelopeList: [1, 2, 3],
      }
    case CREATE:
      return {
        ...state,
        redEnvelopeList: [1, 2, 3],
        ...action.payload,
      }
    case UPDATE:
      return state
    case REMOVE:
      return state
    default:
      return state
  }
}

// Action Creators
export const actions = {
  // fetchRedEnvelopeList: () => ({ type: LOAD }),
  // createRedEnvelope: payload => ({ type: CREATE, payload }),
  // updateRedEnvelope: (payload) => {
  //   fetch('/in', { payload })
  //     .then(response => response.json())
  //     .then(data => ({ type: UPDATE, data }))
  //   return { type: UPDATE, payload }
  // },
  // removeRedEnvelope: payload => ({ type: REMOVE, payload }),
}
